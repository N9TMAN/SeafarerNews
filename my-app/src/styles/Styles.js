import { createTheme } from '@mui/material/styles';

const Colors = {
  primary: '#0694d4',
  secondary: '#666728',
  black: '#fff',
  white: '#000',
  dark: '#231f20',
  light: '#fff1db',
}

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
      contrastText: Colors.white,
    },
    secondary: {
      main: Colors.secondary,
      contrastText: Colors.black,
    }
  },
})

export default theme;
