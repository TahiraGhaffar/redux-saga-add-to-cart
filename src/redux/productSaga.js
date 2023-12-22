import {takeEvery, put} from 'redux-saga/effects'
import { ADD_TO_CART, PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant'

function* getProducts() {
    let data = yield fetch("http://localhost:3500/product")
    // .then(response => response.json())
        // data => data.json()
        // .then(res => yield put({type: SET_PRODUCT_LIST, res}))
    // ) //calls APi
    data = yield data.json();
    console.log("SAGA api called")  // this complete 'getProducts' won't execute until 'API fetch response got'
    console.log("Saga action called", data) //2nd : prints 'data' fetch from APi

    yield put({type: SET_PRODUCT_LIST, data}) //3rd: goes to 'productReducer'
}

function* searchProducts(data){ // data : it has "type" & "payload"
    let result = yield fetch(`http://localhost:3500/product?q=${data.query}`)
    result = yield result.json();
    console.log("search Products is called", result);
    yield put({type: SET_PRODUCT_LIST, data : result}) // 'type: type'  ,  'payload: data'
}

function* testCart() {
    console.log("Call api here")
}

function* productSaga () {  //generator functions : used for handling 'asynchronous functions'
yield takeEvery(PRODUCT_LIST, getProducts) //1st : calls'getProducts'
yield takeEvery(SEARCH_PRODUCT, searchProducts)
// yield takeEvery(SET_PRODUCT_LIST, getProducts)
//yield takeEvery(ADD_TO_CART, testCart)
}

export default productSaga;