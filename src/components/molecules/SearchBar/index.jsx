import React, { useState } from 'react'
import {searchBarContainer,searchInput,searchIcon} from './index.module.css'
import Loupe from '../../../Icons/Loupe/index'

export default function SearchBar({className}) {

    const [search, setSearch] = useState('')
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
  return (
    <div className={`${className} ${searchBarContainer}`}>

        <button className={`${searchIcon}`}>
            <Loupe />
        </button>
        <input 
            className={`${searchInput} unst`}
            value={search}
            placeholder="Search products"
            onChange={handleChange}
        />
    </div>
  )
}
