import React from 'react'
import Skip from '../../../Icons/Skip/skip'
import {buttonContainer,skip} from './styles.module.css'
export default function Button({
    classname,
    onClick,
    type,
    text,
    icon,
    isDisabled
}) {
    const styleDisabled = isDisabled ? { opacity: '0.6'} : {};
    return (
        <button 
            onClick={onClick}
            style={styleDisabled }
            className={`${buttonContainer} ${classname} `} 
            type={type}
            disabled={isDisabled}
        >
            {text}
            <div className={skip} > 
                {icon ? icon : <Skip />}
            </div>
        </button>
    )
}
