export const UPDATE_TEA = 'redux/Update-Tea';

export const updateTea = (selectedTea) => {
  return {
    type: UPDATE_TEA,
    payload: selectedTea,
  };
};

export const UPDATE_TEMP = 'redux/Update-Temperature';

export const updateTemperature = (temperature) => {
  return {
    type: UPDATE_TEMP,
    payload: temperature,
  };
};
