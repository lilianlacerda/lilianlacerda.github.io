import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: '#1E1E1E',
    },
    secondary: {
      main: '#FFAB40',
    },
  },
  typography: {
    fontFamily: '"Roboto"'
  }
});

theme = responsiveFontSizes(theme);

export default theme;
