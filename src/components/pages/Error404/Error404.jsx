import React from 'react'
import ItemListContainer from '../../organisms/NavBar/ItemListContainer'
import NavBar from '../../organisms/NavBar/NavBar'

export const Error404 = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting={MsgError404()}/>

        </>
    )
}

const MsgError404 = () => {
    return (
        <>
            <h1>Error404</h1>
            <br/>
            <p>Esta pagina no existe</p>
        </>
    )
}