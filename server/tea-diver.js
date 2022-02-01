const { Board, Led } = require('johnny-five');
const board = new Board({ port: "COM6" });

board.on('ready', () => {
    console.log('Arduino Connected');
    // Test LED
    const led = new Led(13);
    led.blink(500);
    // Test Thermometer - DS18B20

    board.loop(2000, () => {
        // Test Thermometre
    });

  board.on('exit', () => {
    console.log('Disconnection of Arduino');
  });
});
