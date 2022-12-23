import React from 'react'
import { useCart } from '../../../hooks/useCart'

export const CartPage = () => {
    const { state } = useCart();

    return (
        <div>Carta
            <ul>
                {
                    state.cart.map((item)=>(
                        <li key={item.id}> {item.name}  {item.units} </li>
                    ))
                }
            </ul>
        </div>
    )
}
