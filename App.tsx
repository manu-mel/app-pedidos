import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import Router from './src/routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
