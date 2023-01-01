import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext/ProductContext';

import { getProductsById, getProductsCollection } from '../services/Products/productService';

export const useProducts = () => {

    const { products, setProducts,
        error, setError,
        loading, setLoading } = useContext(ProductContext)

    const { id } = useParams()

    const [product, setProduct] = useState({})
    const [loadingProduct, setLoadingProduct] = useState(true)

    useEffect(() => {
        getProductsCollection
            .then((snapshot) => {
                snapshot.empty && setError(true)
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })
                ))
            })
            .catch((err) => setError(err))
            .finally(() => { setLoading(false) })
    }, [])

    if (id) {
        useEffect(() => {
            if (products.length > 0) {
                const currentProduct = products.find((item) => {
                    if (Number(item.id) == Number(id)) {
                        return item
                    }
                })
                setProduct(currentProduct)
                setLoadingProduct(false)
            }
            else{ 
                getProductsById(id)
                    .then((docs) => {
                        docs.forEach(doc => {
                            console.log({doc});
                            setProduct({
                                id: doc.id.trim(),
                                ...doc.data()
                            })
                            
                        });
                    })
                    .catch((error) => setError(error))
                    .finally(() => { setLoadingProduct(false) })
            }
            return () => {
            }
        }, [id])
    }
    return { products, error, loading, 
            product, loadingProduct}
}
