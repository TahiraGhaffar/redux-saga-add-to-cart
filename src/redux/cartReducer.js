//reducer file
import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

const data = [];

export const cartData = (state = data, action) => { //'initial state', 'action'
    switch(action.type) {

    case ADD_TO_CART:
      console.log("ADDED TO CART",action); //action field's 'data' key
      return [...state, action.data] // 'state' will store previous state b/c 'Redux' removes data on NEW PAGE LOAD
      //  with just 'return [action.data]'
      // on each page load, REDUX only shows latest "ADDED TO CART" item,
      // but with  'return [...state, action.data]' , REDUX shows previous + latest "ADDED TO CART" item

    case REMOVE_FROM_CART:
        console.log("REMOVED FROM CART", action);
        // state.length = state.length ? state.length - 1 : []; 
        // state= state.length - 1  ... isn't valid b/c "state is not iterable"
        // return [...state]

        const remainingItems = state.filter( (item) => item.id !== action.data) //filters throughout all 'state', compares with 'action.data'
        //   item.id ->  id of all items in "STATE" ,  action.data -> item.id passed from action.js "removeFromCart(item.id)"
       console.log("remainingItems",remainingItems)
       return [...remainingItems]

    case EMPTY_CART:
        console.log("EMPTY CART")
        state = []
        return [...state];

    default:
      return state

    }
}