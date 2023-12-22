// import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import allReducer from './rootReducer'
import rootReducer from './rootReducer';
import productSaga from './productSaga';
import createSagaMiddleware from 'redux-saga'


// const dummyReducer = () => {
//     return 100;
// }

//const store = createStore( dummyReducer); // 'dummyReducer' passed as a parameter

// const store = createStore( allReducer ); // 'dummyReducer' passed as a parameter

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(productSaga)

export default store;