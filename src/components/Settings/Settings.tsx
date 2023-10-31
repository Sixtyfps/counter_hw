import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Button/Button";
import s from "./Settings.module.css"

type SettingsType = {
    changeMaxMin:(min:number, max: number)=>void
    onInputPromptMessage:(bool: boolean)=>void
    onInputErrorMessage:(bool: boolean)=>void
    onInputDisplayNumber:(bool: boolean)=>void
    setMax:(number: number)=>void
    setMin:(number: number)=>void
    max: number
    min: number
    setIncButton:(bool: boolean)=>void
    setResetButton:(bool: boolean)=>void
}

export const Settings = (props:SettingsType) => {

    const [active, setActive] = useState(true)

    const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMax(Number(e.currentTarget.value))

        props.setIncButton(true)
        props.setResetButton(true)

        setActive(true)

        if (+e.currentTarget.value <= props.min || +e.currentTarget.value <= 0
            || props.min<0) {
            props.onInputErrorMessage(true)
            props.onInputPromptMessage(false)
            props.onInputDisplayNumber(false)
        } else {
            props.onInputPromptMessage(true)
        }
    }

    const onMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMin(Number(e.currentTarget.value))

        props.setIncButton(true)
        props.setResetButton(true)

        setActive(true)

        if(+e.currentTarget.value < 0 || +e.currentTarget.value >= props.max) {
            props.onInputErrorMessage(true)
            props.onInputPromptMessage(false)
            props.onInputDisplayNumber(false)
        } else {
            props.onInputPromptMessage(true)
        }
    }

    const onClickHandler = () => {
        props.changeMaxMin(props.min, props.max)
        setActive(false)
    }

    return (
        <div className={s.settings}>
           <div className={s.settingsInputsContainer}>
               <span>Max value:</span>
               <input type="number"
                      value={props.max}
                      onChange={onMaxChangeHandler}
                      className={`${s.maxInput} ${props.max <= props.min || props.max<=0 ? s.error : ''}`}/>

               <span>Min value:</span>
               <input type="number"
                      value={props.min}
                      onChange={onMinChangeHandler}
                      className={`${s.minInput} ${props.min < 0 || props.min >= props.max ? s.error : ''}`}/>
           </div>
           <div>
               <Button name='set' onClick={onClickHandler} disabled={props.min<0 || props.max<=props.min || !active}></Button>
           </div>

        </div>
    );
};
