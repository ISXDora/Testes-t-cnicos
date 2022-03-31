import {InputHTMLAttributes} from 'react'
import { ButtonSelectedHours } from './styles'

type ButtonProps = InputHTMLAttributes<HTMLInputElement>

type InputButtonProps = {
    isActive: string;
}

export function Button(props: ButtonProps){
    return (
        <ButtonSelectedHours {...props}/>
    )
}