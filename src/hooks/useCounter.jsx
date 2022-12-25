import { useState } from "react"

export const useCounter = (product) => {
    const [units, setUnits] = useState(product.units||1)

    const addItem = () => {
        if (product.stock && units >= product.stock) {
            return
        }
        setUnits(units + 1)
    }
    const removeItem = () => {
        if (units <= 1) {
            return
        }
        setUnits(units - 1)
    }
    return { units, addItem, removeItem}
}

