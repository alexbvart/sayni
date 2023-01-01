import React from 'react'
import {alertS } from './styles.module.css'
export const Alert = ({children,className}) => {
  return (
    <div className={className ? className : alertS}>
        <p> {children} </p>
    </div>
  )
}
