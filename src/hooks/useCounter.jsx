import { useState } from "react"

export const useCounter = (product) => {
    const unitsValue = product?.units ? product.units : 1;
    const [units, setUnits] = useState(unitsValue)

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

