import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Display} from "./components/Display";

function App() {
    const minNumber = 0;
    const maxNumber = 5;
    const [number, setNumber] = useState(minNumber)

    const inc = () => {
        setNumber(number + 1)
    }

    const reset = () => {
        setNumber(minNumber)
    }

    return (
        <div className="App">
            <div className={"counter"}>

                <Display number={number}/>

                <div className={"buttons"}>
                    <Button name={"inc"}
                            callBack={inc}
                            number={number}
                            disabled={number>=maxNumber}/>

                    <Button name={"reset"}
                            callBack={reset}
                            number={number}
                            disabled={number<=minNumber}/>
                </div>

            </div>


        </div>
    );
}

export default App;
