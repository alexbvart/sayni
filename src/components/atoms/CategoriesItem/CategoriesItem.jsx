import React from 'react'
import {categoriesItemS} from './styles.module.css'
export default function CategoriesItem({value}) {
  return (
    <>
      <li className={categoriesItemS} key={value}>
        {value}
      </li>
    </>
  )
}
