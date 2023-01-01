import React from 'react'
import { Link } from 'react-router-dom'
import SayniLogo from '../../../Icons/Logo/SayniLogo'

export default function Logo({className, color}) {
  return (
    <div className={className}>
      <Link to="/">
        <SayniLogo color={color}/>
      </Link>
    </div>
  )
}
