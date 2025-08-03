'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-dubai-medium)',
  },
  colorSchemes:{
    light:{
      palette:{
        primary:{
          main: '#000000',
        }
      }
    }
  },
  cssVariables: true,
});

export default theme;
