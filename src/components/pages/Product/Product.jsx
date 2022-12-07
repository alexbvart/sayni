import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { formatPrice } from '../../../helpers/number'
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
  const navigate = useNavigate();
  const [units, setUnits] = useState(1)

  const addItem = () => {
    if (product.stock && units>=product.stock) {
      return
    }
    setUnits(units+1)
  }
  const removeItem = () => {
    if (units<=1) {
      return
    }
    setUnits(units-1)
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
              {/* {formatPrice(units*product.price)} */}
              {`S/.${units*product.price}.00`}
            </div>
          </div>
          <Remove onClick={removeItem} />  
        </section>
        <Button type="submit" text="Add to cart" icon={<Bag color="#000"/>}/>
      </div>
    </div>
  )
}
