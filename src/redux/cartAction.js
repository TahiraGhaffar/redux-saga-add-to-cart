import { ADD_TO_CART,REMOVE_FROM_CART, EMPTY_CART } from "./constant"


export const addToCart = (data) => {
    console.log("action is called", data)
    //  return data
    return {
        type: ADD_TO_CART, // type
        data                 // payload
    }
}

export const removeFromCart = (data) => { //'item.id' passed as 'data'

    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
    console.log("remove from cart")
    return {
        type: EMPTY_CART
    }
} 