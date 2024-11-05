
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50", 
    },
    secondary: {
      main: "#2196f3", 
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif", 
    h4: {
      fontWeight: 700, 
    },
    body1: {
      fontSize: "1rem",
    },
  },
});


export const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#4caf50",
      },
      secondary: {
        main: "#2196f3",
      },
      background: {
        default: "#f5f5f5",
        paper: "#ffffff",
      },
    },
  });
  
  export const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#4caf50",
      },
      secondary: {
        main: "#2196f3",
      },
      background: {
        default: "#424242",
        paper: "#303030",
      },
      text: {
        primary: "#ffffff",
        secondary: "#b0bec5",
      },
    },
  });
  

export default theme;
