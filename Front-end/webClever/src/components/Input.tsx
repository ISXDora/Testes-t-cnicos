import {InputHTMLAttributes} from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>


export function Input(props: InputProps){
    return (
        <input className='input-default'{...props}/>
    )
}