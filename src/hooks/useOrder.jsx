import { useState } from "react"
import { onlyBasicProductInformation } from "../helpers/cartFormat";
import { useUser } from "./useUser";

export const useOrder = () => {
    const { user, error } = useUser()

    const [oder, setOder] = useState({})

    const buyNow  = (cart,totalAmount) =>{
        console.log({
        items : onlyBasicProductInformation(cart),
        totalAmount: totalAmount,
        user
    })
    }
    
    const getOrder = () =>{

    }

    

    return {oder,buyNow}
}


