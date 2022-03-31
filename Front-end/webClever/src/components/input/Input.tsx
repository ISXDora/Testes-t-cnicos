import React from 'react';
import {InputHTMLAttributes} from 'react';
import './styles.css'



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isActive?: boolean;

}


export const Input = React.forwardRef(({isActive=false,...props}: InputProps, ref:any)=>{
    return (
        <input className={`input ${isActive ? 'isActive' : ""}`}{...props} ref={ref}/>
    )
})  

