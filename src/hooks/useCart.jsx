import { useContext} from "react"
import { CartContext } from "../context/CartContext/CartContext"
import { ADD_TO_CART, CLEAR_CART, MODIFY_CART_ITEM, REMOVE_FROM_CART } from "../context/CartContext/types"

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
    const modify_cart_item = () =>{
        dispatch({
            type: MODIFY_CART_ITEM,
            payload: product,
        })
    }
    const clearCart = () =>{
        dispatch({
            type: CLEAR_CART,
            payload: product,
        })
    }

    return {state,addItemToCart,removeToCart,modify_cart_item, clearCart }
}


