import { useContext } from "react"
import { CartContext } from "../context/CartContext/CartContext"
import { ADD_TO_CART, REMOVE_FROM_CART } from "../context/CartContext/types"

export const useCart = (product) => {
    const {state,dispatch} = useContext(CartContext)

    const addItemToCart = () =>{
        dispatch({
            type: ADD_TO_CART,
            payload: product,
        })
    }
    
    const removeToCart = () =>{
        dispatch({
            type: REMOVE_FROM_CART,
            payload: product,
        })
    }

    return {state,addItemToCart,removeToCart}
}


