import React from 'react'
import {listContainer} from './index.module.css'
export default function ItemListContainer({children}) {
  return (
    <div className={listContainer}>{children}</div>
  )
}
