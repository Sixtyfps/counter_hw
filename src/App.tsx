import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Button} from "./components/Button/Button";
import {Display} from "./components/Display/Display";
import {Settings} from "./components/Settings/Settings";

function App() {
    //---State for counter number values
    const [minNumber, setMinNumber] = useState(0)
    const [maxNumber, setMaxNumber] = useState(0)

    //---State for displayed number that changes between min and max
    const [number, setNumber] = useState(minNumber)

    //---State for bools that show/hide counter value and messages
    const [prompt, setPrompt] = useState(true)
    const [errorMessage, setErrorMessage] = useState(false)
    const [displayNumber, setDisplayNumber] = useState(false)

    //---State for bools that enable/disable buttons
    const[incButton, setIncButton] = useState(true)
    const[resetButton, setResetButton] = useState(true)


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

        setPrompt(false)
        setErrorMessage(false)
        setDisplayNumber(true)

        setIncButton(false)
        setResetButton(false)
    }

    const onInputPromptMessage = (bool: boolean) => {
        setPrompt(bool)

        setDisplayNumber(!bool)
        setErrorMessage(!bool)
    }

    const onInputErrorMessage = (bool: boolean) => {
        setErrorMessage(bool)
        setDisplayNumber(!bool)
        setPrompt(!bool)
    }

    return (
        <div className={s.App}>

            <Settings changeMaxMin={changeMaxMin}
                      onInputPromptMessage={onInputPromptMessage}
                      onInputErrorMessage={onInputErrorMessage}
                      onInputDisplayNumber={setDisplayNumber}
                      setMax={setMaxNumber}
                      setMin={setMinNumber}
                      max={maxNumber}
                      min={minNumber}
                      setIncButton={setIncButton}
                      setResetButton={setResetButton}
            />

            <div className = {s.counter}>

                <Display number={number}
                         maxNumber={maxNumber}
                         prompt={prompt}
                         error={errorMessage}
                         displayNumber={displayNumber}
                />

                <div className={s.buttons}>
                    <Button name={"inc"}
                            onClick={inc}
                            disabled={incButton || number >= maxNumber}/>

                    <Button name={"reset"}
                            onClick={reset}
                            disabled={resetButton || number <= minNumber}/>
                </div>

            </div>
        </div>
    );
}

export default App;
