import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";
import {Display} from "./components/Display/Display";
import {Settings} from "./components/Settings/Settings";

function App() {
    const minNumber = 0;
    const maxNumber = 5;
    const [number, setNumber] = useState(minNumber)

    useEffect( () => {
        let valueToString = localStorage.getItem('counterValue')
        if (valueToString) {
            let newValue = JSON.parse(valueToString)
            setNumber(newValue)
        }
    },[] )

    useEffect( () => {
        localStorage.setItem('counterValue', JSON.stringify(number))
    }, [number] )

    const inc = () => {
        setNumber(number + 1)
    }

    const reset = () => {
        setNumber(minNumber)
    }


    return (
        <div className="App">

            <Settings />

            <div className={"counter"}>

                <Display number={number}/>

                <div className={"buttons"}>
                    <Button name={"inc"}
                            callBack={inc}
                            // number={number}
                            disabled={number >= maxNumber}/>

                    <Button name={"reset"}
                            callBack={reset}
                            // number={number}
                            disabled={number <= minNumber}/>
                    {/*<button onClick={setToLS}>Set</button>*/}
                    {/*<button onClick={clearLS}>Reset</button>*/}
                </div>

            </div>


        </div>
    );
}

export default App;
