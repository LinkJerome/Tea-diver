import { createStore } from 'redux';
import reducer from './components/reducer/reducer';

export const store = createStore(reducer);
