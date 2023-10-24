
import React from 'react';

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
        <button disabled={props.disabled} onClick={props.onClick}>{props.name}</button>
    )
}