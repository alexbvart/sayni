import React, { useState } from 'react'
import {labelInputContainer,inputContainer,labelForInput,iinput,inputIcon} from './index.module.css'
import Loupe from '../../../Icons/Loupe/index'
import {capitalize} from '../../../helpers/stringFormat'
export default function Input({
        className,
        placeholder,
        label,
        icon,
        name,
        type,
        isRequired
    }) {

    const [search, setSearch] = useState('')
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className={`${className} ${labelInputContainer}`}>
            <label className={labelForInput}>
                {label||capitalize(name)}:
            </label>

            <div className={`${inputContainer}`}>
                <div className={`${inputIcon}`}>
                    {icon}
                </div>
                <input 
                    className={`${iinput}`}
                    value={search}
                    placeholder={placeholder||label}
                    onChange={handleChange}
                    name= {name}
                    type= {type}
                    required={isRequired}
                />
            </div>
        </div>
    )
}
