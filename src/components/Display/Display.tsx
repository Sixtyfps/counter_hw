import React from 'react';
import s from './Display.module.css'

type DisplayType = {
    number: number
    maxNumber: number
    prompt: boolean
    error: boolean
    displayNumber: boolean
}

export const Display = (props: DisplayType) => {
    return (
        <div className={s.background}>
            {props.displayNumber && <div className={props.number >= props.maxNumber ? s.fontColor : ""}>
                <div className={s.digit}>{props.number}</div>
            </div>}


            {props.error && <span className={s.error}>Incorrect value</span>}

            {props.prompt && <span className={s.enterValue}>Enter values and press 'set'</span>}
        </div>

    )
}