import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fit } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { useDispatch } from 'react-redux';
import AllBottleData from "../../Data/AllBottlesData";
import { cartActions } from "../../Store/cartSlice";


function ViewBottleCard() {
  const { bottleName, productId } = useParams();
  
  const dispatch =  useDispatch()
  const [selectedCap, setSelectedCap] = useState({
    id: "Cap1",
    img: "https://res.cloudinary.com/dmurcewte/image/upload/v1682861484/cap1_yizqrd.png",
  });

  const [info, setInfo] = useState(true);
  const [engrave, setEngrave] = useState("");
  const [engraveColor, setEngraveColor] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const[addCartUi, setAddCartUI] = useState(false)


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
  const handleInfoT = () => {
    setInfo(true);
  };
  const handleInfoF = () => {
    setInfo(false);
  };

  const handleEngrave = (e) => {
    setEngrave(e.target.value);
  };

  const handleClick = (image) => {
    setSelectedCap(image);
  };

  
  function extractNumberFromString(str) {
   
    var numericString = str.replace(/\D/g, '');
  
  
    var numericValue = parseInt(numericString, 10);
  
    return numericValue;
  }

  const IntId =extractNumberFromString(productId)

  


  const allBottles = AllBottleData.find((obj) => obj.id === bottleName);
  const bottle = allBottles.data[IntId - 1];
  // const [hexColor, setHexColor] = useState(bottle.hex);

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

  const handleCheckboxChange = () => {
    if(engrave.length > 0) {
      setIsChecked(!isChecked);
    }
  };
 

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
              <img
                src={selectedCap.img}
                alt=""
                className={`${
                  allBottles.id === "Hydrate"
                    ? selectedCap.id === "Cap1"
                      ? "top-[-12%] right-0.5 scale-125"
                      : selectedCap.id === "Cap2"
                      ? " top-[-16%] right-1.5 scale-125"
                      : " top-[-13%] right-1 scale-125"
                    : allBottles.id === "Drip Trip"
                    ? "absolute -top-0.5 scale-105"
                    : allBottles.id === "Kurvey"
                    ? selectedCap.id === "Cap1"
                      ? " top-[-9%] right-0.5 scale-125"
                      : selectedCap.id === "Cap2"
                      ? " top-[-11.5%] right-1.5 scale-125"
                      : " top-[-9.7%] right-0.5 scale-125"
                    : allBottles.id === "Glacia"
                    ? selectedCap.id === "Cap1"
                      ? " top-[-4%] -right-1.5 scale-110 "
                      : selectedCap.id === "Cap2"
                      ? " top-[-5%] -right-0.5 scale-110 "
                      : " top-[-4.6%] -right-1.5 scale-110 "
                    : allBottles.id === "Liquatic"
                    ? selectedCap.id === "Cap1"
                      ? " top-[2.5%] -right-0.5 scale-110 "
                      : selectedCap.id === "Cap2"
                      ? " top-[.5%]  scale-110 "
                      : " top-[2.2%] -right-0.5 scale-110 "
                    : allBottles.id === "Kiddo"
                    ? selectedCap.id === "Cap1"
                      ? " top-[8%] -right-0.5 scale-110 "
                      : selectedCap.id === "Cap2"
                      ? " top-[7%] -right-0.5 scale-110 "
                      : " top-[8%] -right-1 scale-110 "
                    : " top-[-7%] left-0.5"
                }  absolute  `}
              />
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

          <div
            className={`flex space-x-4 ${
              allBottles.Engrave ? "block" : "hidden"
            }`}
          >
            <h4 className="font-bold sm:text-sm md:text-base font-roboto">
              ENGRAVE
            </h4>
            <div className="flex flex-col">
              <label className="font-semibold text-base" htmlFor="">+30 ruppee</label>
              <input
                value={engrave}
                onChange={handleEngrave}
                className="border-gray-300 px-4 w-48 h-10 rounded-xl border-2"
                id="engrave"
                type="text"
                maxLength={9}
              />
              <div className="text-sm flex flex-col space-y-1 px-1  py-1 mt-1">
                <h3>Select Engraving Color</h3>
                <div className="flex items-center">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      value="text-black"
                      checked={engraveColor === "text-black"}
                      className="form-checkbox h-4 w-4 text-black "
                      onChange={handleEngraveColor}
                    />
                    <span className="ml-2 text-gray-700">Black</span>
                  </label>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      value="text-gray-400"
                      className="form-checkbox h-4 w-4 text-gray-400"
                      checked={engraveColor === "text-gray-400"}
                      onChange={handleEngraveColor}
                    />
                    <span className="ml-2 text-gray-700">Silver</span>
                  </label>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      value="text-[#d4af37]"
                      className="form-checkbox h-4 w-4 text-[#d4af37] bg-[#d4af37]"
                      onChange={handleEngraveColor}
                      checked={engraveColor === "text-[#d4af37]"}
                    />
                    <span className="ml-2 text-gray-700">Gold</span>
                  </label>
                </div>
              </div>
              <p className="text-sm ml-4">9 Character Limit</p>
              { engrave.length > 0 && (
                <div className="flex items-center space-x-2 pt-2 ">
            
                <input onChange={handleCheckboxChange}  type="checkbox" id="confirmation-checkbox" className="w-5 h-5 form-checkbox text-indigo-600"/>
           
            <h1 className="text-base font-bold ">Confirm Engraving</h1>
    
            
    
        </div>
              )}
            </div>
           
          </div>
          <div className="flex items-center  space-x-4">
            <h5 className="font-semibold text-xl">₹{isChecked ? bottle.price+30 : bottle.price}</h5>
            <div className="flex space-x-4">
              {
                addCartUi && (
                  <button
                  onClick={handleCartData}
                  disabled
                  className={`bg-[#000000] rounded-3xl text-white px-4  h-10 animate-pulse}`} 
                >
                  Adding to cart...
                </button>

                )
              }
              {
                !addCartUi && (
                  <button
                  onClick={handleCartData}
                  className={`bg-[#000000] rounded-3xl text-white px-4  h-10 `} 
                >
                  Add to cart
                </button>
                )
              }
             
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:justify-evenly bg-white  sm:mx-6 md:mx-0 mt-20">
        <div className="md:block sm:hidden w-80"></div>
        <div className=" md:block sm:hidden w-[290px]"></div>
        <div className="shadow-gray-400 shadow-md px-8 py-4 rounded-xl flex flex-col w-[450px]">
          <div className="flex justify-around">
            <h2
              className={`hover:underline hover:text-blue-600 cursor-pointer ${
                info ? "text-blue-700" : ""
              }`}
              onClick={handleInfoT}
            >
              Description
            </h2>
            <h2
              className={`hover:underline hover:text-blue-600 cursor-pointer ${
                info ? "" : "text-blue-700"
              }`}
              onClick={handleInfoF}
            >
              Delivery
            </h2>
          </div>
          <hr className="border-0.5 mt-2 border-black " />
          <p
            className={`${
              info ? "block" : "hidden"
            } px-2 py-4 text-gray-500 text-sm`}
          >
            Skip the bland disposable bottles and show off your unique style or
            mood with a water bottle. Speedex Light blue Simplex single-wall
            1000 ML Stainless Steel Water Bottle with a newly designed smart
            cap. Exquisitely holding varying qualities of Leak Proof, BPA-free
            fridge bottle, and Grade SS201 value. The excellent go-to choice for
            everyday use for school, home, kitchen, gym & traveling, etc.
            Standard pickup because of its slim and lightweight design.
          </p>
          <div
            className={`${info ? "hidden" : "block"} text-gray-500 px-4 py-2`}
          >
            <div>
              <h4 className=" uppercase font-semibold mb-2 mt-1">
                Standard delivery
              </h4>
              <ul className=" list-disc space-y-1">
                <li> 4 to 7 days of conformation</li>
                <li>No Delivery Charges</li>
                <li>Cash on Delivery not available</li>
              </ul>
            </div>
            <div className=" font-medium mt-4">
              *COD available on Amazon & Flipkart *Click below to return items
              from India . Only Manufacturing defect products are available for
              RETURN. Please click pictures of the products while initiating the
              return process.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ViewBottleCard;