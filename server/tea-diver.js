// const five = require('johnny-five');

const { Board, Led } = require('johnny-five');
// const Thermometer = five.Thermometer;
const board = new Board({ port: '/dev/ttyUSB4' });

board.on('ready', () => {
  console.log('Arduino Connected');
  // Test LED
  const led = new Led(13);
  led.blink(500);
  // Test Thermometer - DS18B20
  // const thermometer = new Thermometer({
  //  controller: 'DS18B20',
  //  pin: 2,
  // });

  board.loop(500, () => {
    // Test Thermometre
    // thermometer.on('change', () => {
    //  const { address, celsius, fahrenheit, kelvin } = thermometer;
    //  console.log(`Thermometer at address: 0x${address.toString(16)}`);
    //  console.log('  celsius      : ', celsius);
    //  console.log('  fahrenheit   : ', fahrenheit);
    //  console.log('  kelvin       : ', kelvin);
    //  console.log('--------------------------------------');
    // });
  });

  // Test Servo
  // const servo = new Servo(10);

  // Servo API

  // min()
  //
  // set the servo to the minimum degrees
  // defaults to 0
  //
  // eg. servo.min();

  // max()
  //
  // set the servo to the maximum degrees
  // defaults to 180
  //
  // eg. servo.max();

  // center()
  //
  // centers the servo to 90°
  //
  // servo.center();

  // to( deg )
  //
  // Moves the servo to position by degrees
  //
  // servo.to( 90 );

  // step( deg )
  //
  // step all servos by deg
  //
  // eg. array.step( -20 );

  board.on('exit', () => {
    console.log('Disconnection of Arduino');
  });
});
