import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../organisms/NavBar/NavBar'
import {layoutOutlet} from './index.module.css'
export default function Layout() {
    return (
        <>
            <NavBar />
            <div className={layoutOutlet}>
                <Outlet />
            </div>
        </>
    )
}
