import React from 'react'

import CategoriesMenu from '../../molecules/CategoriesMenu'
import Logo from '../../molecules/Logo'
import { container, brandArea, searchArea, categoriesArea, cartArea, avatar, userContent } from './styles.module.css'
// import reactLogo from '../../assets/sayni.svg'

import SearchBar from '../../molecules/SearchBar'
import Cart from '../../atoms/Cart'
import Avatar from '../../atoms/Avatar'
import { Link } from 'react-router-dom'
import { useUser } from '../../../hooks/useUser'

export default function NavBar() {

  const { user,logOut } = useUser();
  const photoURL = user?.photoURL;

  return (
    <div className={container}>
      <Logo className={brandArea} />

      <SearchBar className={searchArea} />
      <CategoriesMenu className={categoriesArea} />
      <div className={cartArea}>
        <Cart />
        <ul className={userContent}>
          {!user ?
            <>
              <Link to='/login'>Login</Link>
              <Link to={'/register'}>Register</Link>
            </>
            :
            <>
              <Avatar className={avatar} image={photoURL} />
              <button onClick={() => logOut()}>Logout</button>
            </>
          }

        </ul>
        {/*  */}

      </div>
    </div>
  )
}
