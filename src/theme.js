import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette: {
      primary: '#f44336',
    },
    typography: {
      fontFamily: 'msi'
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1200,
        xl: 1536,
      }
    },
  }); 