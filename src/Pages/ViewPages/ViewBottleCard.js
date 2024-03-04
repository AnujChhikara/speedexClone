import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fit } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { useDispatch } from 'react-redux';
import AllBottleData from "../../Data/AllBottlesData";
import { cartActions } from "../../Store/cartSlice";
import ViewPage from "../../Components/utils/ViewPageBottom";
import BottleViewPageImg from "../../Components/utils/BottleViewPageImg";
import Engraving from "../../Components/utils/Engraving";
import AddCartButton from "../../Components/utils/AddCartButton";
import { extractNumberFromString } from "../../Components/functions";


function ViewBottleCard() {

  const { bottleName, productId } = useParams();
  const dispatch =  useDispatch()
  const [selectedCap, setSelectedCap] = useState({
    id: "Cap1",
    img: "https://res.cloudinary.com/dmurcewte/image/upload/v1682861484/cap1_yizqrd.png",
  });
  const [engrave, setEngrave] = useState("");
  const [engraveColor, setEngraveColor] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const[addCartUi, setAddCartUI] = useState(false)


  const IntId =extractNumberFromString(productId)

  const allBottles = AllBottleData.find((obj) => obj.id === bottleName);
  const bottle = allBottles.data[IntId - 1];
  

  const myImage = new CloudinaryImage(`${bottle.imgId}`, {
    cloudName: "dmurcewte",
  });
  const singleWallImages = myImage.resize(fit().width(600).height(800));
  const doubleWallImages = myImage.resize(fit().width(500).height(500));
  const Caps = allBottles.Cap.map(function (item, index) {
    return (
      <img
        src={item}
        alt=""
        className=""
        onClick={() => handleClick(allBottles.CapImages[index])}
        key={index}
      />
    );
  });
  const Colors = allBottles.Colors.map(function (color, index) {
    return (
      <Link
        key={index}
        className="w-12"
        to={`/product/${bottleName}/${color.id}`}
      >
        <img src={color.link} alt="" />{" "}
      </Link>
    );
  });


 

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
    isEngrave: isChecked
  }));
  setAddCartUI(false)
}, 1500);
   
  }

  const handleEngraveColor = (e) => {
    const value = e.target.value;
    const checkboxes = document.getElementsByName("engrave-color");
    if (value === engraveColor) {
      setEngraveColor("");
    } else {
      setEngraveColor(value);
      checkboxes.forEach((checkbox) => {
        if (checkbox.value !== value) {
          checkbox.checked = false;
        }
      });
    }
  };


  const handleEngrave = (e) => {
    setEngrave(e.target.value);
  };

  const handleClick = (image) => {
    setSelectedCap(image);
  };

  const handleCheckboxChange = () => {
    if(engrave.length > 0) {
      setIsChecked(!isChecked);
    }
  };
 
  return (
    <div>
      <div
        className={`md:flex md:flex-row sm:flex pt-32 sm:flex-col md:justify-evenly sm:justify-center items-center  md:mx-8 `}
        key={bottle.id}
      >
        <div className="md:flex md:flex-row sm:flex sm:flex-col-reverse sm:-space-y-10 md:-space-y-0  justify-center items-center">
          <h2 className="font-semibold sm:mt-4  md:mt-0 font-nunito text-3xl md:pl-16 md:w-96 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            {bottleName} {bottle.name}
          </h2>
          {Caps.length > 0 ? (
            <div className="relative inline-block z-0 ">
              <BottleViewPageImg selectedCap={selectedCap} allBottles={allBottles}/>
              <div className="">
                <AdvancedImage cldImg={singleWallImages} />
              </div>

              <div
                className={` ${engraveColor} absolute -rotate-90 top-[82%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto font-semibold  text-lg`}
              >
                {engrave}
              </div>
              <img
                src="https://res.cloudinary.com/dmurcewte/image/upload/v1682911671/LogoG1.png"
                alt=""
                className={`${
                  allBottles.Logo
                    ? engrave === ""
                      ? "block"
                      : "hidden"
                    : "hidden"
                } ${
                  allBottles.id === "Liquatic"
                    ? "top-[94%]"
                    : allBottles.id === "Kiddo"
                    ? "top-[87%]"
                    : "top-[91%]"
                } absolute w-20  left-1/2 transform -translate-x-1/2 -translate-y-2/3 `}
              />
            </div>
          ) : (
            <div className="">
              <AdvancedImage cldImg={doubleWallImages} />
            </div>
          )}
        </div>

        <div className="bg-white md:text-lg md:pr-28 sm:w-[330px] md:w-auto md:p-6 sm:mt-8 md:mt-0 sm:p-4  sm:mx-4 md:mx-0  flex flex-col md:space-y-8 sm:space-y-4 shadow-md rounded-2xl shadow-gray-400  duration-1000">
          <div className="flex space-x-4">
            <h4 className="font-bold font-roboto">Color</h4>
            <div className="flex  md:w-60 flex-wrap "> {Colors}</div>
          </div>
          <div
            className={`flex space-x-6 ${Caps.length > 1 ? "block" : "hidden"}`}
          >
            <h4 className="font-bold font-roboto">Cap</h4>
            <div className="flex space-x-4">{Caps}</div>
          </div>
          <div className="flex space-x-6">
            <h4 className="font-bold font-roboto">Size</h4>
            <div className="flex space-x-4 font-light text-base">
              <div className="border-2 px-2 py-1 border-gray-300">{allBottles.capacity}ml</div>
              
            </div>
          </div>

      {/* Engraving Start */}

     <Engraving allBottles={allBottles} 
     engrave={engrave} 
     handleEngrave={handleEngrave}
      engraveColor ={engraveColor}
      handleEngraveColor={handleEngraveColor}
       handleCheckboxChange={handleCheckboxChange} />

      {/* Engraving End */}

      {/* Adding Item to cart Start */}

      <AddCartButton bottlePrice={isChecked ? bottle.price+30 : bottle.price} addCartUi={addCartUi} handleCartData={handleCartData}/>

       {/* Adding Item to cart end */}
        </div>
      </div>
      <ViewPage/>
    </div>
  );
}
export default ViewBottleCard;