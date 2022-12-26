import { useState } from 'react';
import { useEffect } from 'react';

import { getProductsCollection } from '../services/Products/productService';

export const useProducts = () => {
    
    const [products, setProducts] = useState([])
    const [error, setError]     = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductsCollection 
            .then((snapshot)=>{
                snapshot.empty && setError(true)
                setProducts( snapshot.docs.map((doc)=> ({ id: doc.id, ...doc.data()}) 
                ))
            })
            .catch( (err) => setError(err))
            .finally(()   => {setLoading(false)})
    }, [])

    return {products,error, loading}
}
