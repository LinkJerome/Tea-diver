import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer/reducer';
import { middleware } from './middleware';

export const store = createStore(reducer, applyMiddleware(middleware));
