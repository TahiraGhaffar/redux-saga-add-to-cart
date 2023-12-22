//reducer file
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

const apiData = [];  //initial State

export const productData = (state = apiData, action) => { //'initial state', 'action'
    switch(action.type) {

    // case PRODUCT_LIST:
    //   console.log("PRODUCT_LIST condition",action); //action field's 'data' key
    //   return [action.data] 

    case SET_PRODUCT_LIST: //4: gets into this 'case'
      console.log("SET_PRODUCT_LIST condition",action); //action has 'type' & 'payload i.e 'data'
      return [...action.data]  //this 'return' needed , b/c called in "Main.js" , "const data = useSelector( (state) => state.productData)"
      

    default:
      return state

    }
}