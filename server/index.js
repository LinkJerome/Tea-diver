const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const PORT = process.env.PORT || 3000;

const app = express().use(express.static(DIST_DIR));

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log(`Client disconnected`);
  });
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port: ${PORT}`);
});

const { Board, Led } = require('johnny-five');
const Thermometer = require('johnny-five/lib/thermometer');
const board = new Board();

board.on('ready', () => {
  // Test LED
  const led = new Led(13);
  led.blink(500);
  // Test Thermometer - DS18B20
  const thermometer = new Thermometer({
    controller: 'DS18B20',
    pin: 2,
  });

  thermometer.on('change', () => {
    const { address, celsius, fahrenheit, kelvin } = thermometer;
    console.log(`Thermometer at address: 0x${address.toString(16)}`);
    console.log('  celsius      : ', celsius);
    console.log('  fahrenheit   : ', fahrenheit);
    console.log('  kelvin       : ', kelvin);
    console.log('--------------------------------------');
  });
});
