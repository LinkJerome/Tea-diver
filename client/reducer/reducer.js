import { UPDATE_PLOUF, UPDATE_TEA, UPDATE_TEMP } from './actions';

const initialState = {
  selectedTea: {
    Name: '',
    'Brew Time': 0,
    Description: '',
    Origin: '',
    Temperature: 0,
  },
  temperature: 0,
  isPlouf: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEA:
      return { ...state, selectedTea: action.payload };
    case UPDATE_TEMP:
      return { ...state, temperature: action.payload };
    case UPDATE_PLOUF:
      return { ...state, isPlouf: !state.isPlouf };
    default:
      return { ...state };
  }
};

export default reducer;
