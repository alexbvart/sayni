import React, { useEffect, useRef } from 'react'
import {itemCart,image,infoItem,infoPrice,unitPrice,totalPrice,buttonsS,buyLater,buyCounter} from './styles.module.css'
import {useCounter} from '../../../hooks/useCounter'
import { useCart } from '../../../hooks/useCart'
import Less from '../../../Icons/Remove/Less'
import More from '../../../Icons/Add/More'
import { formatPrice } from '../../../helpers/number'
import { Link } from 'react-router-dom'

export const ItemCart = ({item}) => {

  const {units,addItem,removeItem} = useCounter(item);
  const {modify_cart_item,removeToCart} = useCart({...item, units}); 
  const debounceRef = useRef();

  useEffect(() => {
    const onUnitsChange = () =>{
      if (debounceRef) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(()=>{
        modify_cart_item()
      }, 1000)
    }
    onUnitsChange()
    return () => { }
  }, [units])
  
  return (
    <div className={itemCart}>
        <div className={infoItem}>
            <img alt={item.name} src={item.default_image} className={image}/>
            <div className={infoPrice}>
                <Link   to={`/products/${item.id}`}>
                  <h2>{item.name}</h2>
                  <p className={unitPrice}>Unit price: {formatPrice(item.price)}</p>
                </Link>
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
