import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from './theme';
import { Main } from './components/main.component';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
