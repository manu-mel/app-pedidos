import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, themeDark } from './src/theme';
import Router from './src/routes';
import { Appearance } from 'react-native';

const App = () => {
  const color = Appearance.getColorScheme();
  // const colorScheme = color === 'dark' ? themeDark : theme;
  const colorScheme = color === 'dark' ? theme : themeDark;

  return (
    <ThemeProvider theme={colorScheme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
