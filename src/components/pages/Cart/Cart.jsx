import React from 'react'
import { useCart } from '../../../hooks/useCart'
import { title,cartEmpty, cartListS, counterProducts, totalAmount } from './index.module.css'
import { ItemCart } from '../../atoms/CartItem/ItemCart';
import { formatPrice } from '../../../helpers/number';
import Button from '../../atoms/Button/Button';
import { useOrder } from '../../../hooks/useOrder';
import cartIcon from '../../../assets/cart.svg'
import { Link } from 'react-router-dom';
export const CartPage = () => {
    const { state } = useCart();
    const { buyNow } = useOrder();

    const totalOrderCost = state.cart.length > 0
        ? state.cart
            .map((item) => item.price * item.units)
            .reduce((previous, current) => previous + current
            )
        : 0;

    return (
        <div className=''>
            <div className={title}>
                <h1> Cart</h1>
                {state.cart.length > 0 && <div className={counterProducts}>{state.cart.length}</div>}
            </div>

            {!state.cart.length > 0 &&
                <div className={cartEmpty}>
                    <img src={cartIcon} alt="carrito de compras" height='64px' />
                    <p><b>YOU HAVE NO PRODUCTS IN YOUR CART</b></p>
                    <p>Find the best products, at the best prices.</p>
                    <Link to='/'>
                        <Button text="Buy now" />
                    </Link>
                </div>
            }

            {state.cart.length > 0 &&
                <>
                    <ul className={cartListS}>
                        {
                            state.cart.map((item) => (
                                <ItemCart key={item.id} item={item} />
                            ))
                        }
                        <div key='totalAmount' className={totalAmount}>
                            Total Amonut &nbsp; <br />
                            <span>{formatPrice(totalOrderCost)}</span>
                        </div>
                        <Button text="Buy now" onClick={() => buyNow(state.cart, totalOrderCost)} />
                    </ul>
                </>
            }
        </div>
    )
}
