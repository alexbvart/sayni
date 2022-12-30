import React from 'react'
import Skip from '../../../Icons/Skip/skip'
import {buttonContainer,skip} from './styles.module.css'
export default function Button({
    classname,
    onClick,
    type,
    text,
    icon
}) {
    return (
        <button 
            onClick={onClick}
            className={`${buttonContainer} ${classname}`} 
            type={type}
        >
            {text}
            <div className={skip} > 
                {icon ? icon : <Skip />}
            </div>
        </button>
    )
}
