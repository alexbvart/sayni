import React from 'react'
import Bag from '../../../Icons/Avatar/Bag/Bag'

import {itemList,addToCart,bagWrapper} from './index.module.css'

export default function ItemCard({name,price,img}) {

    return (
        <div className={itemList} style={{backgroundImage : `url(${img})` }} >
            <h2> {name} </h2> 
            <div className={addToCart}>
                <p>S/. {price}.00</p>
                <div className={bagWrapper}>
                    <Bag />
                </div>
            </div>
        </div>
    )

}

