import { useState, createContext } from 'react'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [error, setError]     = useState(null)
    const [loading, setLoading] = useState(true)
    return (
        <ProductContext.Provider
            value={{ products,setProducts,
                error, setError,
                loading, setLoading
            }}
        >
            { children }
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProvider }