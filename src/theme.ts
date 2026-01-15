import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: '#1E1E1E',
    },
    secondary: {
      main: '#4f8e3e',
    },
  },
  typography: {
    fontFamily: '"Roboto"'
  }
});

theme = responsiveFontSizes(theme);

export default theme;
