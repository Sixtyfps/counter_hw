
import React from 'react';

type ButtonType = {
    name: string
    callBack:()=>void
    number: number
    disabled: boolean
}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
    )
}