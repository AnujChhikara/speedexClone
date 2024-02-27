
import { useSelector } from 'react-redux';
import CartItem from "../Components/Common/CartItem";
import { Link } from 'react-router-dom';


function Cart() {
  const cartItems =  useSelector((state) => state.cart.items)

  const cartTotal = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  if(cartItems.length === 0){
    return <div className='mt-32 text-lg flex  justify-center items-center'>
      <img className='' src='images/shopping.png' alt='empty cart'/>
      <div className='flex flex-col items-center '>
      <p className="text-gray-600">Oops! Your cart is feeling a bit lonely.</p>
          <p className="text-gray-600">Why not fill it with some amazing items?</p>
          {/* Add a button or a link to redirect users to the shop */}
          <button className="mt-4 w-40 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300">
            <Link  to='/hot-n-cold'>Explore Shop</Link>
          </button></div>
    </div>
  }
 

  return (
    

<div class="relative overflow-x-auto border border-gray-400 shadow-md sm:rounded-lg mt-40 mx-20">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
           Your Cart
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Here is a list of your cart items.</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Capacity
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                   Total Price Price
                </th>
                
            </tr>
        </thead>
        <tbody>
           
                
        { 
          cartItems.map((item) => (
          
        <CartItem
        key={item.id}
                  item={{ 
                    id:item.id,
                   bottleName:item.name,
                  price:item.price,
                quantity:item.quantity,
                totalPrice: item.totalPrice,
              isEngrave: item.isEngrave}}
                /> 
          ))
        }
        </tbody>
       
    </table>
    <div className='h-48 p-6 flex flex-col items-end '>
      <div className='bg-gray-400 h-48 rounded-lg p-4 flex flex-col justify-around items-start  w-60'>
      <h3 className='text-md font-semibold text-gray-600'>Subtotal:-&#8377; {cartTotal} </h3>
      <p className='text-md font-semibold text-gray-800'>Shipping : free</p>
      <p className='text-md font-semibold text-gray-600'>Total:-  &#8377;40000 </p>
    </div></div>
</div>

 
  );
}
export default Cart;
