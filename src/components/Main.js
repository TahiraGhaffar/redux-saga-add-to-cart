import { addToCart, emptyCart, removeFromCart } from '../redux/cartAction';
import { useDispatch,useSelector } from 'react-redux'
import { productList, setProductList} from '../redux/productActions';
import { useEffect } from 'react';


function Main() { //first 'Main() runs, 'return' runs later
  const dispatch = useDispatch();
  let data = useSelector( (state) => state.productData);
  console.log("data in main component from saga", data); // called initially on 1st render
  //also called everytime when ' "productDataReducer" invoked'
  const product = {
    name: 'i Phone',
    category: 'mobile',
    price: 10000,
    color: 'red'
  }

  useEffect( () => {
  dispatch(productList())
  }, [])

  return (
    <div>
      <h1>Products Page</h1>
      {/* <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button> */}
      <div>
      {/* <button onClick={() => dispatch(removeFromCart(product))}>Remove From Cart</button> */}
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      <div>
      {/* <button onClick={() => dispatch(productList()) }>Get Product List</button> */}
      </div>
      </div>
      </div>
      <div className='product-container'>
        {
          data.length && data.map((item) => <div className='product-item' key={item.id}> 

          <img src={item.photo} alt=""/>
          <div>Name: {item.name} </div>
          <div>Color: {item.color} </div>
          <div>Brand: {item.brand} </div>
          <div>Price: {item.price} </div>
          <div>Category: {item.category} </div>
          <div>
             <button onClick={() => dispatch(addToCart(item))}> Add To Cart</button>
             <button onClick={() => dispatch(removeFromCart(item.id))} >Remove From Cart</button>

          </div>
          <br/>
          <br/>
          <br/>
          </div>
          )
         
        }
      </div>
    </div>
  );
}

export default Main;




// import { addToCart, emptyCart, removeFromCart } from '../redux/action';
// import { useDispatch,useSelector } from 'react-redux'
// import { productList} from '../redux/productActions';
// import { useEffect } from 'react';

// function Main() {
//   const dispatch = useDispatch();
//   let data = useSelector((state)=>state.productData);
//   console.warn("data in main component", data);
  
//   useEffect(()=>{
//     console.log("data",data)
//     // dispatch(productList())
//   },[])
//   return (
//     <div>
//       <div>
//       <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
//       <div>
//       <button onClick={() => dispatch(productList())}>Get Product List</button>
//       </div>
//       </div>
//       <div className='product-container'>
//         {
//           data.length && data.map((item)=><div className='product-item'>
//             <img src={item.photo} alt="" />
//             <div>Name : {item.name} </div>
//             <div>Color : {item.color} </div>
//             <div>Price : {item.price} </div>
//             <div>Category : {item.category} </div>
//             <div>Brand : {item.brand} </div>
//             <div>
//               <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
//               <button onClick={() => dispatch(removeFromCart(item.id))}>Remove to Cart</button>

//               </div>
//           </div>)
//         } 
//       </div>
//     </div>
//   );
// }

// export default Main;