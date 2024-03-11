import logo from './logo.svg';
import './App.css';
import {Button, Container, createTheme, CssBaseline, FormControlLabel, Switch, ThemeProvider} from "@mui/material";
import {useState} from "react";
import RandomMath from "./components/RandomMath";


export default function App() {
    const [dark, setDark] = useState(true);
    const [labelTheme, setLabelTheme] = useState("Theme sombre")
    const [openDialog, setOpenDialog] = useState(false);
    const [lvl, setLvl] = useState("");

    const handleChange = () => {
        labelTheme === "Theme sombre" ? setLabelTheme('Theme clair') : setLabelTheme('Theme sombre')
    }

    return (
        <ThemeProvider theme={dark === true ? themeDark : themeLight}>
            <CssBaseline/>
            <Container maxWidth="xl">
                <FormControlLabel
                    control={<Switch defaultChecked color="secondary"/>}
                    value={labelTheme}
                    label={labelTheme}
                    onClick={dark === true ? () => {
                        setDark(false)
                    } : () => {
                        setDark(true)
                    }
                    }
                    onChange={handleChange}
                />
                <RandomMath />
                <Button
                    variant={"contained"}
                    onClick={() => {setOpenDialog(true); setLvl('easy')}}

                    >Easy
                </Button>
                <Button
                    variant={"contained"}
                    onClick={() => {setOpenDialog(true); setLvl('medium')}}
                >Medium
                </Button>
                <Button
                    variant={"contained"}
                    onClick={() => {setOpenDialog(true); setLvl('expert')}}
                >Expert
                </Button>
                {openDialog &&<RandomMath open={true} onClose={()=>setOpenDialog(false)} lvl={lvl} />}
            </Container>
        </ThemeProvider>
    );
}

const themeDark = createTheme({
    palette: {
        background: {
            paper: '#007be0',
            default: "#001e3c"
        },
        text: {
            primary: "#ffffff"
        },
        primary: {
            main: '#003a75'
        },
        secondary: {
            main: '#007be0'
        }
    }
})

const themeLight = createTheme({
    palette: {
        background: {
            paper: '#ced6db',
            default: "#b1deee"
        },
        text: {
            primary: "#000000"
        },
        primary: {
            main: '#f0f0f7'
        },
        secondary: {
            main: '#a2a2a2'
        }
    }
})
