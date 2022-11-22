import React from 'react'
import {listContainer} from './index.module.css'
export default function ItemListContainer({greeting}) {
  return (
    <div className={listContainer}>{greeting}</div>
  )
}
