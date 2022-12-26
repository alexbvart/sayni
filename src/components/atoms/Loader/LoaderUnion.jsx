import React from 'react'
import { centered, blob1, blob2 } from './loaderUnion.module.css'
export const LoaderUnion = () => {
    return (
        <div className={centered}>
            <div className={blob1}></div>
            <div className={blob2}></div>
        </div>
    )
}
