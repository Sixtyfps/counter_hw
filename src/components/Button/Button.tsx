import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    name: string
    onClick:()=>void
    disabled: boolean
}

export const Button = (props: ButtonType) => {

    // const onClickHandler = () => {
    //     props.onClick()
    // }

    return (
        <button disabled={props.disabled}
                className={`${s.button} ${props.disabled? s.disabled : ''}`}
                onClick={props.onClick}>{props.name}</button>
    )
}