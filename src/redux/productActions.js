import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant"


export const productList =  () => {
    // let data = "hello"
    // let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // data = await data.json();
    // console.log("action is called", data)

    //  return data
    return {
        type: PRODUCT_LIST, // type
        // data: "apple"                 // payload
    }
}

export const setProductList =  () => {
//    console.log("set action")
    return {
        type: SET_PRODUCT_LIST, // type
        // data                 // payload
    }
}


export const productSearch = (query) => {
    return {
        type: SEARCH_PRODUCT,  //type
        query,                 // payload
    }
}
