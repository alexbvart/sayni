import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { onlyBasicProductInformation } from "../helpers/cartFormat";
import { createOrder, getOrderById } from "../services/Order/OrderService";
import { useCart } from "./useCart";
import { useUser } from "./useUser";

export const useOrder = () => {
    const { user } = useUser()
    const navigate = useNavigate()
    const { id }  = useParams()

    const { clearCart } = useCart()

    const [order, setOrder] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const buyNow = async (cart, totalAmount) => {
        const newOrder = {
            items: onlyBasicProductInformation(cart),
            totalAmount: totalAmount,
            user
        }
        createOrder(newOrder)
            .then((order) => {
                setOrder(order.id)
                navigate(`/order/${order.id}`)
            })
            .catch(error => setError(error))
            .finally(() => {
                clearCart()
                setLoading(false)
            })
    }

    if (id) {
        useEffect(() => {
            getOrderById(id)
                .then((doc) => {
                    setOrder({
                        id: doc.id.trim(),
                        ...doc.data()
                    })
                })
                .catch((error) => setError(error))
                .finally(() => { setLoading(false) })

            return () => {
            }
        }, [])
    }


    return { order, errorOrder: error, loadingOrder: loading, buyNow }
}


