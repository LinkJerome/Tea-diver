import { io } from 'socket.io-client';
import { READY_TO_PLOUF, SHAKE_TEA, UPDATE_PLOUF, updateTemperature } from "./reducer/actions";
import _ from 'lodash';
import { store } from './store';

const socket = io();

socket.on('thermos', (data) => {
  const celsius = _.get(data, 'celsius', 0);
  store.dispatch(updateTemperature(celsius));
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
    default:
      break;
  }

  next(action);
};
