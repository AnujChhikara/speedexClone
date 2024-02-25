import React from 'react'
import AllBottleData from '../AllBottlesData';
import AtelierData from '../AtelierData';
import { fit } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

function CartItem(props) {
    const { bottleName, price, id,quantity,totalPrice } = props.item;
   
    let imgUrl = ''
    let image = null;

    if(bottleName==='Milo-500'){
      const numStr = id.slice(2);
      const num = parseInt(numStr);
      const index = num - 1;
      const allBottles = AtelierData.find((obj) => obj.id === bottleName);
      const bottle = allBottles.data[index];
      image = new CloudinaryImage(`Milo_500/${bottle.imdId}`, {
        cloudName: "dmurcewte",
      }).resize(fit().width(110).height(190));
      
    } 
    
    else {

      const bottleSection =  AllBottleData.find((item) => item.id === bottleName)
      const bottle = bottleSection.data.filter((item) => item.id === id);
      imgUrl = bottle[0].imgUrl
     

    }
   
 
    
   console.log(image);
  return (
    <div className= 'flex flex-col justify-center items-center'>
      <div>
     {bottleName === "Milo-500" ? (
          <AdvancedImage cldImg={image} />
        ) : (
          <img className="sm:w-40" src={imgUrl} alt="productImage" />
        )}</div>
        <div className='flex flex-col justify-center items-center'>
        <h2>{bottleName}</h2>
        <p>Price:- &#8377;{price}/per Item</p>
  
        <p>Quantity: {quantity}</p>
        <p>Total Price:- &#8377;{totalPrice}</p></div>

    </div>
  )
}

export default CartItem