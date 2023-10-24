import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Button/Button";

type SettingsType = {
    changeMaxMin:(min:number, max: number)=>void
}

export const Settings = (props:SettingsType) => {

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)

    const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("Max " + e.currentTarget.value)
        setMax(+(e.currentTarget.value))
    }

    const onMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMin(+(e.currentTarget.value))
    }

    const onClickHandler = () => {
        props.changeMaxMin(min, max)
    }

    return (
        <div>
           <div>
               <span>Min</span>
               <input type="number" onChange={onMinChangeHandler}/>

               <span>Max</span>
               <input type="number" onChange={onMaxChangeHandler}/>
           </div>
           <div>
               <Button name='set' onClick={onClickHandler} disabled={false}></Button>
           </div>

        </div>
    );
};
