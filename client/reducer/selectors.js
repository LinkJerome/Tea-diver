export const getBrewTime = (state) => state.selectedTea['Brew Time'];

export const getIsPlouf = (state) => state.isPlouf;

export const getIsGoodTemperature = (state) => state.currentTemperature >= state.selectedTea.Temperature;

export const getSelectedTea = (state) => state.selectedTea;

export const getTemperature = (state) => state.currentTemperature;
