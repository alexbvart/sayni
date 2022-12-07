import React from 'react'
import CategoriesItem from '../../atoms/CategoriesItem/CategoriesItem';
import {categoriesListS} from './styles.module.css'
import categories from '../../../mooks/categories'

export default function CategoriesMenu({className}) {


    console.log(categories)
    return (
        <ul className={`${categoriesListS} ${className}`}>
            {categories.map((item) => 
                <CategoriesItem value={item.name} key={`categorie_${item.id_category}`}/>
            )} 
        </ul>
    )
}
