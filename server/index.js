const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

// Arduino
const { Board, Thermometer } = require('johnny-five');
const board = new Board({ port: 'COM6' });

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

  io.on('connection', (socket) => {
    console.log('Client Connected');

    // Test Thermometer - DS18B20
    const thermometer = new Thermometer({
      controller: 'DS18B20',
      pin: 2, // Modify if needed
    });

    board.loop(2000, () => {
      // Test Thermometre

      thermometer.on('change', () => {
        const { celsius, fahrenheit, kelvin } = thermometer;
        console.log('  celsius      : ', celsius);
        console.log('  fahrenheit   : ', fahrenheit);
        console.log('  kelvin       : ', kelvin);
        console.log('--------------------------------------');

        socket.emit('thermos', { celsius, fahrenheit, kelvin });
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
