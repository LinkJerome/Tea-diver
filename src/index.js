import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import five from 'johnny-five';
import App from './App';

const board = new five.Board({
  port: '/dev/ttyACM0',
});

board.on('ready', () => {
  // eslint-disable-next-line no-console
  console.log('Connected Bris !');
  const led = new five.Led(13);
  led.blink(500);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
