
import { useSelector } from 'react-redux';
import CartItem from "../Components/utils/CartItem";
import { Link } from 'react-router-dom';


function Cart() {
  const cartItems =  useSelector((state) => state.cart.items)

  const cartTotal = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  if(cartItems.length === 0){
    return <div className='mt-32 text-lg md:flex md:flex-row sm:flex sm:flex-col sm:space-y-10 md:space-y-0  justify-center items-center'>
      <img className='sm:w-60 md:w-auto' src='https://res.cloudinary.com/dmurcewte/image/upload/v1709131460/shopping_vhij8c.png' alt='empty cart'/>
      <div className='flex flex-col items-center '>
      <p className="text-gray-600">Oops! Your cart is feeling a bit lonely.</p>
          <p className="text-gray-600">Why not fill it with some amazing items?</p>
          {/* Add a button or a link to redirect users to the shop */}
          <button className="md:mt-4 sm:mt-12 w-40 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300">
            <Link  to='/hot-n-cold'>Explore Shop</Link>
          </button></div>
    </div>
  }
 

  return (
    <div className='flex sm:flex-col md:flex-row sm:items-center sm:space-y-4 md:space-y-0 justify-center md:items-end mt-40'>

<div className="relative overflow-x-auto border border-gray-400 shadow-md sm:rounded-lg md:mx-20 md:w-2/3 sm:w-[96%]">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
           Your Cart
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Here is a list of your cart items.</p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="md:px-6 sm:px-2 py-3">
                    Product name
                </th>
                <th scope="col" className="md:px-6 sm:px-2">
                    Capacity
                </th>
                <th scope="col" className="md:px-6 sm:px-2">
                    Quantity
                </th>
                <th scope="col" className="md:px-6 sm:px-2">
                   Total Price 
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
   
</div>
<div className=' flex flex-col '>


  
      <div className='bg-gray-400 h-48 rounded-lg p-4 space-y-4 flex flex-col justify-around items-start w-64'>
      <h3 className='text-md font-semibold text-gray-600'>Subtotal:-&#8377; {cartTotal}  </h3>
      <p className='text-md font-semibold text-gray-800'>Shipping : free</p>
      <p className='text-md font-semibold text-gray-600'>Total:-  &#8377; {cartTotal}  </p>

      <div className="flex justify-end ">
      <h3 className='bg-black text-white rounded-md px-4 py-2'><Link to='/checkout'>Procceed to Payment  &#8594;</Link></h3>
        
      </div>
    </div></div>
    </div>

 
  );
}
export default Cart;
