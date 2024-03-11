import React, {useEffect, useState} from "react";

export default function RandomMath({lvl}) {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0)
    const randomMath = () => {
        setNum1(Math.round(Math.random() * (1, 10)))
        setNum2(Math.round(Math.random() * (1,10)))
    }

    useEffect(() => {
        randomMath()
    }, []);

    const calculate = () => {
        if (lvl === 'easy') {

        }
        if (lvl === 'medium') {

        }
        if (lvl === 'expert') {

        }
    }

    return (
        <div>
            WIP
        </div>
    )
}