import React from 'react'
import AllBottleData from '../AllBottlesData';
import AtelierData from '../AtelierData';
import { fit } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

function CartItem(props) {
    const { bottleName, id,quantity,totalPrice, isEngrave } = props.item;
   
    let imgUrl = ''
    let image = null;
    let AtelierBottle ;
    let capacity;

    if(bottleName==='Milo-500'){
      const numStr = id.slice(2);
      const num = parseInt(numStr);
      const index = num - 1;
      const allBottles = AtelierData.find((obj) => obj.id === bottleName);
      AtelierBottle = allBottles.data[index];
      image = new CloudinaryImage(`Milo_500/${AtelierBottle.imdId}`, {
        cloudName: "dmurcewte",
      }).resize(fit().width(110).height(150));
      
    } 
    
    else {

      const bottleSection =  AllBottleData.find((item) => item.id === bottleName)
      const bottle = bottleSection.data.filter((item) => item.id === id);
      imgUrl = bottle[0].imgUrl
      capacity = bottleSection.capacity
     

    }
    let finalPrice = totalPrice
    console.log(isEngrave)

    if(isEngrave){
      finalPrice += 30
      
      
    }
   
  return (
    
    
     <>
     {bottleName === "Milo-500" ? (
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
       <th scope="row" class="px-6 flex items-center space-x-6 ml-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <AdvancedImage cldImg={image} />
          <h2>{AtelierBottle.name}</h2>
          </th>
        
        
        <td class="px-6 py-4"> 500ml</td>
       
        
  
<td class="px-6 py-4">{quantity}</td>
        <td class="px-6 py-4">&#8377;{finalPrice}</td>
        </tr>
        ) : (
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
         <th scope="row" class="px-6 py-4 flex items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <img className="w-32" src={imgUrl} alt="productImage" />
          <h2>{bottleName}</h2>
          </th>
        
          
        
        <td class="px-6 py-4">{capacity}ml</td>
        
     
  
        <td class="px-6 py-4">{quantity}</td>
        <td class="px-6 py-4"> &#8377;{finalPrice}</td>
        </tr>
        )
        }
        

    
    </>
  )
}

export default CartItem