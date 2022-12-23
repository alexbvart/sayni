import React from 'react'
import { Link } from 'react-router-dom'
import cartIcon from '../../../assets/cart.svg'
import { useCart } from '../../../hooks/useCart';
import {cartContainer,counterProducts} from './index.module.css'
export default function Cart() {

  const {state} = useCart();

  return (
    <Link className={cartContainer} to={"cart"}>
      <img src={cartIcon } alt="carrito de compras" />
      {state.cart.length> 0 && <div className={counterProducts}>{state.cart.length}</div>}
    </Link>
  )
}
