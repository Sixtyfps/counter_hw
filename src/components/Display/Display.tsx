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
        <div className={s.display}>
            {props.displayNumber &&
                <div className={`${s.digit} ${props.number >= props.maxNumber ? s.fontColor : ""}`}>
                    {props.number}
                </div>
            }

            {props.error && <span className={s.error}>Incorrect value</span>}

            {props.prompt && <span className={s.promptMessage}>Enter values and press 'set'</span>}
        </div>

    )
}