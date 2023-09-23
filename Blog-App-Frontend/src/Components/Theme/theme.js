import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
const breakpoints = {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  };
  // Create a theme instance.
const theme = createTheme({
    breakpoints,
    palette: {
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: red.A400,
      },
      Blog: {
        main: "#90FF00",
        secondary: "#FFFFFF",
        tertiary: "#D9D9D9",
        offBlack: "#202020",
        paraGray: "#6F6C90",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
    typography: {
      fontFamily: "Poppins",
      h1: {
        fontSize: "8rem",
        fontWeight: 700,
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 600,
      },
      h3: {
        fontSize: "2rem",
        fontWeight: 600,
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 600,
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 600,
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 600,
      },
  
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
      },
      caption: {
        fontSize: "0.625rem",
        fontWeight: 600,
      },
    },
   });

   export default theme;