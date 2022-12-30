import { ADD_TO_CART, CLEAR_CART, MODIFY_CART_ITEM, REMOVE_FROM_CART } from "./types"

const CartReducer = (state, action) => {

    switch (action.type) {
        case ADD_TO_CART:{
            let isExistsInCart = state.cart.find((item) => item.id === action.payload.id);
            
            return isExistsInCart 
            ? {...state, cart:
                state.cart.map((item) => {
                    
                    let totalUnitsToBuy = item.units + action.payload.units;
                    return item.id === action.payload.id
                    ? { ...item, 
                        units: totalUnitsToBuy > item.stock ? item.stock  : totalUnitsToBuy}
                    : item
                })}
            : {...state, cart:[...state.cart, action.payload]}
        }
        case MODIFY_CART_ITEM:
            return {...state, cart:[
                ...state.cart.map((item) => item.id === action.payload.id ? action.payload : item)
            ]}

        case REMOVE_FROM_CART:
            return {...state, cart:[
                ...state.cart.filter((item) => item.id !== action.payload.id)
            ]}
        case CLEAR_CART:
            return { cart:[]}
        default:
            return state
    }
}

export default CartReducer;
