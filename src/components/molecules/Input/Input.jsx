import {labelInputContainer,inputContainer,labelForInput,iinput,inputIcon} from './index.module.css'
import {capitalize} from '../../../helpers/stringFormat'
export default function Input({
        className,
        placeholder,
        label,
        icon,
        name,
        type,
        onChange,
        isRequired
    }) {

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
                    placeholder={placeholder||label}
                    onChange={onChange}
                    name= {name}
                    type= {type}
                    required={isRequired}
                />
            </div>
        </div>
    )
}
