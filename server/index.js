const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

// Arduino
const { Board, Thermometer, Led, Servo  } = require('johnny-five');
const board = new Board({ port: 'COM7' });

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
  let isUp = true;

  const led = new Led(13);

  const servo = new Servo(10);

  setTimeout(() => {// Test Thermometer - DS18B20
    thermometer = new Thermometer(
      {
        controller: "DS18B20",
        pin: 2
      });
  }, 1000);

  setTimeout(() => {// Test Thermometer - DS18B20
    thermometer.on('change', (therm) => {
      const { celsius, fahrenheit, kelvin } = thermometer;
      temp = celsius;
      console.log('  celsius      : ', celsius);
      console.log('  fahrenheit   : ', fahrenheit);
      console.log('  kelvin       : ', kelvin);
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
      led.off()
      console.log('TODO Descendre le sachet de thé');
      socket.on('shake', () => {
        console.log('TODO shake your booty');
        if(isUp){
          console.log('SHAKE MIN');
          servo.min();
          isUp = false;
        } else {
          console.log('SHAKE MAX');
          servo.max();
          isUp = true;
        }
      });
      socket.on('unplouf', () => {
        console.log('TODO Remonter le sachet de thé');
      });
    });

    socket.on('readyToPlouf', () => {
      led.on()
      socket.on('notReadyToPlouf', () => {
        led.off()
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
