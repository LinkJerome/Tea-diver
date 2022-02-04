import { io } from 'socket.io-client';
import { SHAKE_TEA, UPDATE_PLOUF, UPDATE_TEMP } from './reducer/actions';
import _ from 'lodash';

const socket = io();

let celsius = 0;

socket.on('thermos', (data) => {
  celsius = _.get(data, 'celsius', 0);
});

export const middleware = () => (next) => (action) => {
  switch (action.type) {
    case UPDATE_PLOUF:
      if (action.payload) {
        socket.emit('plouf');
      } else {
        socket.emit('unplouf');
      }
      break;
    case SHAKE_TEA:
      socket.emit('shake');
      break;
    case UPDATE_TEMP:
      action.payload = celsius;
      break;
    default:
      break;
  }

  next(action);
};
