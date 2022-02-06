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

  const led = new Led.RGB([5, 3, 2]);

  const servo = new Servo({
    pin: 10,
    startAt: 180,
  });

  setTimeout(() => {// Test Thermometer - DS18B20
    thermometer = new Thermometer(
      {
        controller: "DS18B20",
        pin: 8
      });
  }, 1000);

  setTimeout(() => {// Test Thermometer - DS18B20
    thermometer.on('change', (therm) => {
      const { celsius } = thermometer;
      temp = celsius;
      console.log('Current Temperature      : ', celsius);
    });
  }, 3000);

  console.log('Thermometer Connected and Listening')

  io.on('connection', (socket) => {
    console.log('Client Connected');

    board.loop(500, () => {
      socket.emit('thermos', { celsius: temp });
    });

    led.on();
    led.color("#0000FF");

    socket.on('plouf', () => {
      led.color("#FF0000");
      servo.min();

      socket.on('shake', () => {
        if(isUp){
          servo.min();
          isUp = false;
        } else {
          servo.to(45);
          isUp = true;
        }
      });
      socket.on('unplouf', () => {
        led.color("#00FF00");
        servo.max();
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
