import React from 'react'

import CategoriesMenu from '../../molecules/CategoriesMenu'
import Logo from '../../molecules/Logo'
import {container,brandArea,searchArea,categoriesArea,cartArea,avatar} from './styles.module.css'
// import reactLogo from '../../assets/sayni.svg'
  
import SearchBar from '../../molecules/SearchBar'
import Cart from '../../atoms/Cart'
import Avatar from '../../atoms/Avatar'

export default function NavBar() {
  return (
    <div className={container}>
      <Logo className={brandArea} />

      <SearchBar className={searchArea} />
      <CategoriesMenu className={categoriesArea}/>
      <div className={cartArea}>
        <Cart />
        <Avatar className={avatar}/>
      </div>
    </div>
  )
}
