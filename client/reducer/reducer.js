import { UPDATE_TEA, UPDATE_TEMP } from './actions';

const initialState = {
  selectedTea: {},
  temperature: 0,
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line no-console
  console.log({ action });

  switch (action.type) {
    case UPDATE_TEA:
      return { ...state, temperature: action.payload };
    case UPDATE_TEMP:
      return { ...state, selectedTea: action.payload };
    default:
      return state;
  }
};

export default reducer;
