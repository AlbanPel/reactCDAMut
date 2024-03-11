import logo from './logo.svg';
import './App.css';
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {dark} from "@mui/material/styles/createPalette";


export default function App() {
  return (
      <ThemeProvider theme={themeDark}>
          <CssBaseline />
          <Container maxWidth="xl">


          </Container >
      </ThemeProvider>

  );
}

const themeDark = createTheme({
    palette: {
        background: {
            paper: '#007be0',
            default: "#001e3c"
        }
    },
    primary: {
        main: '#003a75'
    },
    secondary: {
        main: '#007be0'
    },
    text: {
        primary: "#fff"
    }

})
