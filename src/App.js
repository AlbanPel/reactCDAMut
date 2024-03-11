import logo from './logo.svg';
import './App.css';
import {Container, createTheme, CssBaseline, FormControlLabel, Switch, ThemeProvider} from "@mui/material";
import {dark} from "@mui/material/styles/createPalette";
import {useState} from "react";


export default function App() {
    const [dark, setDark] = useState(true);
    const [labelTheme, setLabelTheme] = useState("theme sombre")

    const handleChange = () => {
        labelTheme === "theme sombre" ? setLabelTheme('Theme Clair') : setLabelTheme('Theme sombre')
    }


  return (
      <ThemeProvider theme={dark === true ? themeDark : themeLight}>
          <CssBaseline />
          <Container maxWidth="xl">
              <FormControlLabel
                  control={<Switch defaultChecked color="secondary"/> }
                  value={labelTheme}
                  label={labelTheme}
                  onClick={dark === true ? ()=>{setDark(false)} : ()=>{setDark(true)}}
                  onChange={handleChange}
                  />


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

const themeLight = createTheme({
    palette: {
        background: {
            paper: '#ced6db',
            default: "#b1deee"
        }
    },
    primary: {
        main: '#f0f0f7'
    },
    secondary: {
        main: '#a2a2a2'
    },
    text: {
        primary: "#000000"
    }
})
