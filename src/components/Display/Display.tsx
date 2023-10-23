import React from 'react';
import '../../App.css'

type DisplayType = {
    number: number
}

export const Display = (props: DisplayType) => {
    return (
        <div className={'background'}>
            <div className={props.number >= 5 ? "font-color" : ""}>{props.number}</div>
        </div>

)
}