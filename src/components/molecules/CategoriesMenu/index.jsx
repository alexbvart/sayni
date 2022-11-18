import React from 'react'
import CategoriesItem from '../../atoms/CategoriesItem/CategoriesItem';
import {categoriesListS} from './styles.module.css'

export default function CategoriesMenu({className}) {

    const categoriesList = ["Clothes","Electronics","Furniture","Shoes","Others"];
    return (
        <ul className={`${categoriesListS} ${className}`}>
            {/* {categoriesList.map(item=>{
                    <CategoriesItem value={item} />
            })} */}
            <CategoriesItem value="Clothes" /> 
            <CategoriesItem value="Electronics" /> 
            <CategoriesItem value="Furniture" /> 
        </ul>
    )
}
