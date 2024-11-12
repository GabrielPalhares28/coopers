import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Cor primária do projeto
    },
    secondary: {
      main: '#FFC107', // Cor secundária do projeto
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
