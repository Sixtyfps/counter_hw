import React, {ChangeEvent} from 'react';
import {Button} from "../Button/Button";

type SettingsType = {

}

export const Settings = (props:SettingsType) => {

    const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("Max " + e.currentTarget.value)
        return e.currentTarget.value
    }
    const onMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("Min " + e.currentTarget.value)
        return e.currentTarget.value
    }

    return (
        <div>
           <div>
               <span>Max Value</span>
               <input type="number" onChange={onMaxChangeHandler}/>

               <span>Min Value</span>
               <input type="number" onChange={onMinChangeHandler}/>
           </div>
           <div>
               <Button name='set' callBack={()=>{}} disabled={false}></Button>
           </div>

        </div>
    );
};
