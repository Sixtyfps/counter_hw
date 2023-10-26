import React from 'react';
import '../../App.css'

type DisplayType = {
    number: number
    maxNumber: number
}

export const Display = (props: DisplayType) => {
    return (
        <div className={'background'}>
            {<div className={props.number >= props.maxNumber ? "font-color" : ""}>{props.number}</div>}

        </div>

)
}