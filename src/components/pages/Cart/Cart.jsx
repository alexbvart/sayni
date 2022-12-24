import React from 'react'
import { useCart } from '../../../hooks/useCart'
import {title,cartListS,counterProducts} from './index.module.css'
import { ItemCart } from '../../atoms/CartItem/ItemCart';
export const CartPage = () => {
    const { state } = useCart();

    return (
        <div>
            <div className={title}>
                <h1> Cart</h1> 
                {state.cart.length> 0 && <div className={counterProducts}>{state.cart.length}</div>}
            </div>


            {!state.cart.length> 0 && <p>Add some products to cart</p>}

            {state.cart.length> 0 && 
                <ul className={cartListS}>
                    {
                        state.cart.map((item)=>(
                            <ItemCart key={item.id} item={item}/>
                        ))
                    }
                </ul>
            }
        </div>
    )
}
