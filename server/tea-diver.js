const { Board, Led, Thermometer } = require('johnny-five');
const board = new Board({ port: 'COM6' });

board.on('ready', () => {
  console.log('Arduino Connected');
  // Test LED
  const led = new Led(13);
  led.blink(500);
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
    });
  });

  board.on('exit', () => {
    console.log('Disconnection of Arduino');
  });
});
