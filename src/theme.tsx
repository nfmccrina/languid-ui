import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8090A0',
      dark: '#606870',
      light: '#00FF00',
    },
    secondary: {
      main: '#0000FF',
    },
    error: {
      main: '#ff2424',
    },
    warning: {
      main: '#ffcf38',
    },
    info: {
      main: '#0000FF',
    },
    text: {
      primary: 'rgba(22,22,22,0.87)',
    },
  },
});

export default theme;
