import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Button/Button";
import s from "./Settings.module.css"

type SettingsType = {
    changeMaxMin:(min:number, max: number)=>void
}

export const Settings = (props:SettingsType) => {

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)

    const [active, setActive] = useState(true)

    const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value)
        setActive(true)
    }

    const onMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMin(+e.currentTarget.value)
        setActive(true)
    }

    const onClickHandler = () => {
        props.changeMaxMin(min, max)
        setActive(false)
    }

    return (
        <div>
           <div>
               <span>Min</span>
               <input type="number" onChange={onMinChangeHandler} className={min < 0 || min >= max ? s.error : ''}/>

               <span>Max</span>
               <input type="number" onChange={onMaxChangeHandler} className={max < 0 || max <= min ? s.error : ''}/>
           </div>
           <div>
               <Button name='set' onClick={onClickHandler} disabled={min<0 || max<0 || max<=min || !active}></Button>
           </div>

        </div>
    );
};
