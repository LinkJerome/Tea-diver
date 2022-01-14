import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from './theme';
import { Body } from './components/body';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Body />
      </ThemeProvider>
    </div>
  );
}

export default App;
