import React, {useEffect, useState} from "react";
import {Alert, Button, Dialog, DialogContent, DialogTitle, TextField} from "@mui/material";

export default function RandomMath({open, onClose, lvl}) {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const [labelOperator, setLabelOperator] = useState("");
    const [userInput, setUserInput] = useState("");
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState(false)
    const randomMath = () => {
        setNum1(Math.round(Math.random() * (1, 10)))
        setNum2(Math.round(Math.random() * (1,10)))
    }

    useEffect(() => {
        randomMath()
    }, []);

    const calculate = () => {
        if (lvl === 'easy') {
            const _easy = num1 + num2
            setResult(_easy);
            setLabelOperator("+")
        }
        if (lvl === 'medium') {
            const _medium = num1 - num2
            setResult(_medium)
            setLabelOperator("-")
        }
        if (lvl === 'expert') {
            const _expert = num1 * num2
            setResult(_expert)
            setLabelOperator("*")
        }
    }

    const handleControl = () => {
        if (userInput == result) {
            setMessage("Bien joué !!")
            setAlert(true)
        } else {
            setMessage("Try again!")
            setAlert(true)
        }
    }

    useEffect(() => {
        calculate()
    }, [num1, num2])

    return (
        <Dialog open={open} onClose={onClose} maxWidth={"lg"} fullWidth>
            <DialogTitle>Level : {lvl}</DialogTitle>
            <DialogContent>
                {num1} {labelOperator} {num2}
                <TextField
                    id="standard-basic"
                    label="Alors ????"
                    variant="standard"
                    onChange={event => setUserInput(event.target.value)}
                />
                <Button
                    variant={"contained"}
                    color={"success"}
                    onClick={handleControl}
                    >Envoyer
                </Button>
                <div>
                    {alert && <Alert security={"warning"}>{message}</Alert> }
                </div>
            </DialogContent>
        </Dialog>
    )
}