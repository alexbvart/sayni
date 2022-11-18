import React from 'react'

import CategoriesMenu from '../../molecules/CategoriesMenu'
import Logo from '../../molecules/Logo'
import {container,brandArea,categoriesArea,cartArea,avatar} from './styles.module.css'
// import reactLogo from '../../assets/sayni.svg'
  import cartIcon from '../../../assets/cart.svg'

export default function NavBar() {
  return (
    <div className={container}>
      <Logo className={brandArea} />
      <CategoriesMenu className={categoriesArea}/>
      <div className={cartArea}>
        <img src={cartIcon} alt="carrito de compras" />
        <img src="https://media-exp1.licdn.com/dms/image/D4E03AQGvKf2fWPd8kA/profile-displayphoto-shrink_800_800/0/1665460096773?e=1674086400&v=beta&t=AQTUrJ6ctaUMd6N7TTUqWwXwV-lMqlRadrajoH0t6xE" 
              alt="avatar"  className={avatar}/>
      </div>
    </div>
  )
}
