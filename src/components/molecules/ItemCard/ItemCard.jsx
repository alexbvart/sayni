import React from 'react'
import { Link } from 'react-router-dom'
import Bag from '../../../Icons/Bag/Bag'

import {itemList,addToCart,bagWrapper} from './index.module.css'

export default function ItemCard({name,price,img,id}) {

    return (
        <Link 
            className={itemList} 
            style={{backgroundImage : `url(${img})` }} 
            to={`/products/${id}`}
        >
            <h2> {name} </h2> 
            <div className={addToCart}>
                <p>S/. {price}.00</p>
                <div className={bagWrapper}>
                    <Bag />
                </div>
            </div>
        </Link>
    )

}

