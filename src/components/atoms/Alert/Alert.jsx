import React from 'react'
import {alertS } from './styles.module.css'
export const Alert = ({children}) => {
  return (
    <div className={alertS}>
        <p> {children} </p>
    </div>
  )
}
