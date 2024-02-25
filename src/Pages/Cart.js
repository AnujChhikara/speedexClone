// import AtelierData from "../Components/AtelierData";
// import AllBottleData from "../Components/AllBottlesData";
// import { fit } from "@cloudinary/url-gen/actions/resize";
// import { CloudinaryImage } from "@cloudinary/url-gen";
// import { AdvancedImage } from "@cloudinary/react";
// import { useState } from "react";
import { useSelector } from 'react-redux';
import CartItem from "../Components/Common/CartItem";

function Cart() {
  const cartItems =  useSelector((state) => state.cart.items)

  // let image = null;

  // if (allBottles.id === "Milo-500") {
  //   // Update the value of image if bottle.id is "milo"
  //   image = new CloudinaryImage(`Milo_500/${bottle.imdId}`, {
  //     cloudName: "dmurcewte",
  //   }).resize(fit().width(100).height(170));
  // }
 

 console.log(cartItems)

  return (
    <div className="flex  flex-col space-y-6 md:w-[90%] justify-center font-play sm:pt-40  items-center text-xl  mt-20 md:px-4 pb-20">
      <div className="border md:flex md:flex-row sm:flex md:w-[90%] sm:w-80 sm:flex-col sm:space-y-4 md:space-y-0 sm:p-6  shadow-lg bg-white shadow-gray-400 justify-around items-center border-gray-300 md:p-8">
        {/* {allBottles.id === "Milo-500" ? (
          <AdvancedImage cldImg={image} />
        ) : (
          <img className="sm:w-28" src={bottle.imgUrl} alt="" />
        )} */}
       { 
          cartItems.map((item) => (
        <CartItem
        key={item.id}
                  item={{ 
                    id:item.id,
                   bottleName:item.name,
                  price:item.price,
                quantity:item.quantity,
                totalPrice: item.totalPrice}}
                />
          ))
        }

         
           
      </div>
      
    </div>
  );
}
export default Cart;
