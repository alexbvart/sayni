import React from 'react'
import ItemListContainer from '../organisms/NavBar/ItemListContainer'
import NavBar from '../organisms/NavBar/NavBar'

export default function Layout() {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting="greeting"/>
        </>
    )
}
