import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const five = require('johnny-five');

const board = new five.Board();
board.on('ready', () => {
  // eslint-disable-next-line no-console
  console.log('Connected Bris !');
  const led = five.Led(9);
  led.blink(500);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
