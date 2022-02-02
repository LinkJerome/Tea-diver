import { io } from 'socket.io-client';
import { UPDATE_PLOUF } from './reducer/actions';

const socket = io();

export const middleware = () => (next) => (action) => {
  switch (action.type) {
    case UPDATE_PLOUF:
      if (action.payload) {
        socket.emit('plouf');
      } else {
        socket.emit('unplouf');
      }
      break;
    default:
      break;
  }

  next(action);
};
