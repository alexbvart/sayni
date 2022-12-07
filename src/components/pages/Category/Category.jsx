import React, {} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import BackIcon from '../../../Icons/Back/Back'
import categories from '../../../mooks/categories'
import products from '../../../mooks/products'
import ItemCard from '../../molecules/ItemCard/ItemCard'
import ItemListContainer from '../../organisms/ItemListContainer'
import {categorieFlex, nameArea,cartArea} from './index.module.css'


export default function Category() {
  const params = useParams()
  const category = categories[params.id-1]
  const navigate = useNavigate();
  const productsForCategorieId = products.filter((product => product.id_category == params.id ))

  return (
    <div className={categorieFlex}>
      <div className={nameArea}> 
        <div>
          <h1> {category.name}</h1>
          <p> {category.description} </p>
        </div>
          <BackIcon  onClick={() => navigate(-1)} />
      </div>
      {/* <div className={cartArea}> 
        <p> {category.description} </p>
      </div> */}

      <ItemListContainer>
          {
            productsForCategorieId.map((item)=>(
              <ItemCard key={`product_${item.id}`} price={item.price} name={item.name} img={item.default_image} id={item.id} />
            ))
          }
        </ItemListContainer> 
    </div>
  )
}
