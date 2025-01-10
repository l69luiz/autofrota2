
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { LightTheme } from './shared/themes';
import { ThemeProvider } from '@mui/material/styles';

export const App = () => {
  return (
  <ThemeProvider theme={LightTheme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ThemeProvider>    
  );
}


