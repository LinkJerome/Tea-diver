import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Theme } from './theme';
import { Main } from './components/main.component';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <Main />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
