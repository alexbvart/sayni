import React from 'react'
import Skip from '../../../Icons/Skip/skip'
import {buttonContainer,skip} from './styles.module.css'
export default function Button({
    classname,
    type,
    text,
    icon =<Skip />
}) {
    return (
        <button 
            className={`${buttonContainer} ${classname}`} 
            type={type}
        >
            {text}
            <div className={skip} > 
                {icon}
            </div>
        </button>
    )
}
