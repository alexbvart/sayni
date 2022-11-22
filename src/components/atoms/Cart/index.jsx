import React from 'react'
import cartIcon from '../../../assets/cart.svg'
import {cartContainer,counterProducts} from './index.module.css'
export default function Cart() {
  return (
    <div className={cartContainer}>
      <img src={cartIcon } alt="carrito de compras" />
      <div className={counterProducts}>4</div>
    </div>
  )
}
