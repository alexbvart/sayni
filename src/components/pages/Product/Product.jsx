import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { formatPrice } from '../../../helpers/number'
import { useCart } from '../../../hooks/useCart'
import { useCounter } from '../../../hooks/useCounter'
import { useProducts } from '../../../hooks/useProducts'
import Add from '../../../Icons/Add/Add'
import BackIcon from '../../../Icons/Back/Back'
import Bag from '../../../Icons/Bag/Bag'
import Remove from '../../../Icons/Remove/Remove'
import { Alert } from '../../atoms/Alert/Alert'
import Button from '../../atoms/Button/Button'
import { productGrid, nameArea, imageArea, cartArea, counterSection, counterPriceItem, counterItem, priceItem, botonsS } from './index.module.css'

import { SayniLoader } from "../../atoms/Loader/SayniLoader"
export default function Products() {

  const navigate = useNavigate();

  const { product, loadingProduct } = useProducts();

  const { state } = useCart();

  const isItemInCart = state.cart.find((item) => item.id === product.id && item);

  const { units, addItem, removeItem } = useCounter(isItemInCart || product);
  const { addItemToCart, removeToCart } = useCart({ ...product, units });

  if (loadingProduct) {
    return <SayniLoader />
  }
  return (
    <>
      { !loadingProduct &&
        <div className={productGrid}>
          <div className={nameArea}>
            <div>
              <h1>{product.name}</h1>
              <p >Unit price: {formatPrice(product.price)}</p>
            </div>
            <BackIcon onClick={() => navigate(-1)} />
          </div>
          <div className={imageArea}>
            <img src={product.default_image} alt={product.name} />
          </div>
          <div className={cartArea}>
            <section className={counterSection}>
              {!isItemInCart && <Add onClick={addItem} />}
              <div className={counterPriceItem}>
                <div className={counterItem}>
                  {units}
                </div>
                <div className={priceItem}>
                  {`S/. ${units * product.price}.00`}
                </div>
                <p> In stock, only {product.stock}</p>
              </div>
              {!isItemInCart && <Remove onClick={removeItem} />}
            </section>

            {
              !isItemInCart
                ?
                <Button
                  type="submit"
                  text="Add to cart"
                  icon={<Bag color="#000" />}
                  onClick={addItemToCart}
                />
                :
                <div className={botonsS}>
                  <Link to={"/cart"}>
                    <Button type="submit" text="Go to cart" />
                  </Link>
                  <Button type="submit" text="Remove to cart" onClick={removeToCart} />
                </div>
            }

          </div>
          {units >= product.stock &&
            <Alert> Sorry! In stock, only {product.stock} </Alert>
          }
        </div>
      }
    </>

  )
}
