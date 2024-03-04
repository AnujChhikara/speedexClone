import { useState } from "react";
import { useParams } from "react-router-dom";
import { fit } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import AtelierData from "../../Data/AtelierData";
import { useDispatch } from 'react-redux';
import { cartActions } from "../../Store/cartSlice";
import AtelierCategory from "../../Components/utils/AtelierCategory";
import ViewPage from "../../Components/utils/ViewPageBottom";
import AddCartButton from "../../Components/utils/AddCartButton";


function AtelirerViewCard() {
  const { bottleName, productId } = useParams();
  const dispatch =  useDispatch()
  const[addCartUi, setAddCartUI] = useState(false)
 
 
  const numStr = productId.slice(2);
  const num = parseInt(numStr);
  const index = num - 1;
  const allBottles = AtelierData.find((obj) => obj.id === bottleName);
  const bottle = allBottles.data[index];
  const Colors = allBottles.colors;
  

  const price = bottle.price
  const id = bottle.id
  const title = bottleName
  
  
    function handleCartData(){
      setAddCartUI(true)
      setTimeout(() => {
        dispatch(cartActions.addItemToCart({
          id,
          title,
          price,
          isEngrave: false
        }));
        setAddCartUI(false)
      }, 1500);
        
    }

   
  const Image_m5 = new CloudinaryImage(`Milo_500/${bottle.imdId}`, {
    cloudName: "dmurcewte",
  });
  const milo500Images = Image_m5.resize(fit().width(300).height(450));

  return (
    <div className="">
      <div>
        <div
          style={{ backgroundColor: bottle.bgHex }}
          className={`md:flex md:flex-row w-screen sm:pt-40  md:h-screen sm:flex sm:flex-col md:justify-around sm:justify-center items-center pt-12 sm:pb-12 md:pb-20 md:px-2 `}
          key={bottle.id}
        >
          <div className="md:flex md:flex-row sm:flex sm:flex-col-reverse sm:-space-y-10 md:-space-y-0  justify-center items-center">
            <h2
              className={`font-semibold sm:mt-4   md:mt-0 font-nunito text-2xl text-black md:pl-16 md:w-80 ${
                bottle.id === "m51" || bottle.id === "m55"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {bottle.name}
            </h2>

            <div className="pt-10">
              <div className="">
                <AdvancedImage cldImg={milo500Images} />
              </div>
            </div>
          </div>
          <div className="bg-white md:text-lg md:w-[420px] sm:w-[350px] md:p-6 sm:mt-12 md:mt-3 sm:p-4 text-[12px] sm:mx-4 md:mx-0  flex flex-col md:space-y-8 sm:space-y-4 shadow-lg rounded-lg shadow-gray-400  duration-1000">
            <div className="font-medium text-md">
              <h4 className="mb-6"> BOTTLES</h4>
              <AtelierCategory Colors={Colors} bottleName={bottleName}/>
            </div>
            <div className="flex items-center space-x-6">
              <h4 className="font-bold font-roboto">Size</h4>
              <div className="flex  font-light text-base">
                <div className="underline underline-offset-4 text-sm border-gray-500">
                  {bottle.capacity}ml
                </div>
              </div>
            </div>

           {/* Adding Item to cart Start */}

      <AddCartButton bottlePrice={bottle.price} addCartUi={addCartUi} handleCartData={handleCartData}/>

{/* Adding Item to cart end */}
          </div>
        </div>

        <ViewPage/>
      </div>
    </div>
  );
}
export default AtelirerViewCard;
