import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCart } from '../../../hooks/useCart'
import { useCounter } from '../../../hooks/useCounter'
import { useToggle } from '../../../hooks/useToggle'
import Add from '../../../Icons/Add/Add'
import BackIcon from '../../../Icons/Back/Back'
import Bag from '../../../Icons/Bag/Bag'
import Remove from '../../../Icons/Remove/Remove'
import products from '../../../mooks/products'
import Button from '../../atoms/Button/Button'
import {productGrid, nameArea,imageArea,cartArea,counterSection,counterPriceItem,counterItem,priceItem} from './index.module.css'


export default function Products() {
  const params = useParams()
  
  const product = products[params.id-1]

  const {units,addItem,removeItem} = useCounter(product);
  const {state,addItemToCart,removeToCart} = useCart({...product, units});
  const navigate = useNavigate();
  const [buttonCart, toggler] = useToggle(true)

  const addCart = () =>{ addItemToCart(); toggler(!buttonCart) }
  const removeCart = () =>{ removeToCart(); toggler(!buttonCart)}

  console.log({state})
  if (product.stock && units > product.stock) {
    console.log("No tenemos mas stock",{state})
    return
}

  return (
    <div className={productGrid}>
      <div className={nameArea}> 
        <h1> {product.name}</h1>
          <BackIcon  onClick={() => navigate(-1)} />
      </div>
      <div className={imageArea}>
        <img src={product.default_image} alt={product.name} />
      </div>
      <div className={cartArea}> 
        <section className={counterSection}> 
          <Add onClick={addItem} /> 
          <div className={counterPriceItem}>
            <div className={counterItem}>
              {units}
            </div>
            <div className={priceItem}>
              {`S/. ${units*product.price}.00`}
            </div>
            <p> In stock, only {product.stock}</p>
          </div>
          <Remove onClick={removeItem} />  
        </section>
        
        {
          buttonCart ?
          <Button type="submit" 
          text="Add to cart" 
          icon={<Bag color="#000"/>} 
          onClick={addCart}
          />
          :
          <Button type="submit" 
            text="Remove to cart"  
            onClick={removeCart}
          />
        }
        
      </div>
    </div>
  )
}
