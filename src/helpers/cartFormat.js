export function onlyBasicProductInformation(cart) {
    return cart.map((product)=> {

        const item = {
            id: product.id, 
            name: product.name,
            units: product.units,
            // availableStock: true
        }        
        // if(product.units >= product.stock) { 
        //     return {...item ,availableStock: false} 
        // }
        return item
    });
}  