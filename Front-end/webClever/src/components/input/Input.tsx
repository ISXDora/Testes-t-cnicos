import {InputHTMLAttributes} from 'react'
import './styles.css'

type InputProps =InputHTMLAttributes<HTMLInputElement>


export function Input(props: InputProps){
    return (
        <input className="input"{...props}/>
    )
}