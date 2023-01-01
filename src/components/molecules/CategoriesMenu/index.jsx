import React from 'react'
import CategoriesItem from '../../atoms/CategoriesItem/CategoriesItem';
import {categoriesListS} from './styles.module.css'
import categories from '../../../mooks/categories'
import { Link } from 'react-router-dom';

export default function CategoriesMenu({className}) {
    return (
        <ul className={`${categoriesListS} ${className}`}>
            {categories.map((item) => 
                <Link to={`/category/${item.id_category}`} key={`categorie_${item.id_category}`}>
                    <CategoriesItem value={item} />
                </Link>
            )} 
        </ul>
    )
}
