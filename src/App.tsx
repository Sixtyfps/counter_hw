import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";
import {Display} from "./components/Display/Display";
import {Settings} from "./components/Settings/Settings";

function App() {
    // const minNumber = 0;
    // const maxNumber = 5;
    const [minNumber, setMinNumber] = useState(0)
    const [maxNumber, setMaxNumber] = useState(0)

    const [number, setNumber] = useState(minNumber)

    // useEffect( () => {
    //     let valueToString = localStorage.getItem('counterValue')
    //     if (valueToString) {
    //         let newValue = JSON.parse(valueToString)
    //         setNumber(newValue)
    //     }
    // },[] )
    //
    // useEffect( () => {
    //     localStorage.setItem('counterValue', JSON.stringify(number))
    // }, [number] )

    const inc = () => {
        setNumber(number + 1)
    }

    const reset = () => {
        setNumber(minNumber)
    }

    const changeMaxMin = (min: number, max: number) => {
        setNumber(min)
        setMinNumber(min)
        setMaxNumber(max)
    }

    return (
        <div className="App">

            <Settings changeMaxMin={changeMaxMin}/>

            <div className={"counter"}>

                <Display number={number}
                         maxNumber={maxNumber}/>

                <div className={"buttons"}>
                    <Button name={"inc"}
                            onClick={inc}
                            disabled={number >= maxNumber}/>

                    <Button name={"reset"}
                            onClick={reset}
                            disabled={number <= minNumber}/>
                </div>

            </div>


        </div>
    );
}

export default App;
