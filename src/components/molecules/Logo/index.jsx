import React from 'react'
import { Link } from 'react-router-dom'
import sayniLogo from '../../../assets/sayni.svg'
export default function Logo({className}) {
  return (
    <div className={className}>
      <Link to="/">
        <img 
          src={sayniLogo} 
          alt="Logo Sayni Store" className="logo"
          />
      </Link>
    </div>
  )
}
