const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');


const convertToBinary = (number) => {
  let num = number;
  let binary = (num % 2).toString();
  for (; num > 1; ) {
      num = parseInt(num / 2);
      binary =  (num % 2) + (binary);
  }
  return binary;
}

const intChelouToCelsius = (number) => {
  console.log(' base : ', number)
  console.log(' convert : ', convertToBinary(number))
  console.log(' div : ', convertToBinary(number)/10000 )
  const bin = Math.trunc(convertToBinary(number)/10000);
  console.log(' bin : ', bin )
  console.log(' final : ', parseInt(bin,2) )
  
  return parseInt(bin,2);
}


// Arduino
const { Board, Thermometer } = require('johnny-five');
const board = new Board({ port: 'COM4' });

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const PORT = process.env.PORT || 3000;

const app = express().use(express.static(DIST_DIR));

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

const io = new Server(server);

board.on('ready', () => {
  console.log('Arduino Connected');

  let thermometer;
  let temp; 

  setTimeout(() => {// Test Thermometer - DS18B20
    thermometer = new Thermometer(
      {
        pin: 2
      });
  }, 1000);

  setTimeout(() => {// Test Thermometer - DS18B20
    thermometer.on('change', (therm) => {
      temp = intChelouToCelsius(therm.celsius);
      console.log('  celsius      : ', temp);
      console.log('--------------------------------------');
    });
  }, 3000);

  console.log('Thermometer Connected and Listening')

  io.on('connection', (socket) => {
    console.log('Client Connected');

    board.loop(500, () => {
      socket.emit('thermos', { celsius: temp });
    });

    socket.on('plouf', () => {
      console.log('TODO Descendre le sachet de thé');
      socket.on('shake', () => {
        console.log('TODO shake your booty');
      });
      socket.on('unplouf', () => {
        console.log('TODO Remonter le sachet de thé');
      });
    });

    socket.on('disconnect', () => {
      // eslint-disable-next-line no-console
      console.log(`Client disconnected`);
    });

    board.on('exit', () => {
      console.log('Disconnection of Arduino');
    });
  });
});

server.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
