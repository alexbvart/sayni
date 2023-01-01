import React from 'react'
import { Alert } from './Alert'
import {alertError} from './styles.module.css'
export const ErrorAlert = ({ text }) => {
    return (
        <Alert className={alertError} >
            {text}
        </Alert>
    )
}
