import React from 'react'
import { formatPrice } from '../../../helpers/number'
import More from '../../../Icons/Add/More'
import Less from '../../../Icons/Remove/Less'
import {itemCart,image,infoItem,infoPrice,unitPrice,totalPrice,buttonsS,buyLater,buyCounter} from './styles.module.css'
import {useCounter} from '../../../hooks/useCounter'
import { useCart } from '../../../hooks/useCart'

export const ItemCart = ({item}) => {

  const{removeToCart} = useCart(item);
  const {units,addItem,removeItem} = useCounter(item);

  return (
    <div className={itemCart}>
        <div className={infoItem}>
            <img alt={item.name} src={item.default_image} className={image}/>
            <div className={infoPrice}>
                <div>
                <h2>{item.name}</h2>
                <p className={unitPrice}>Unit price: {formatPrice(item.price)}</p>
                </div>
                <div className={totalPrice}> {formatPrice(item.price*units)}</div>
            </div>
        </div>
        <div className={buttonsS}>
          <div className={buyLater} onClick={removeToCart}>
            Buy later
          </div>
          <div className={buyCounter}>
            <More onClick={addItem} /> 
            {units}
            <Less onClick={removeItem} />  
          </div>
        </div>

    </div>
  )
}
