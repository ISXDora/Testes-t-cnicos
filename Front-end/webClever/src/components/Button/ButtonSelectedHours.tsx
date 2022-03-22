import {ButtonHTMLAttributes} from 'react'
import { ButtonSelectedHours } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>


export function Button(props: ButtonProps){
    return (
        <ButtonSelectedHours {...props}></ButtonSelectedHours>
    )
}