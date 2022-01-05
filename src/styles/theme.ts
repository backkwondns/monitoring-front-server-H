import React from 'react';
import { createTheme } from '@mui/material';

const theme = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  createTheme({
    palette: {
      mode,
    },
  });
};
