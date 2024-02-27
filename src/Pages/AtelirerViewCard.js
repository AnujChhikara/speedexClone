import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useParams } from "react-router-dom";
import { fit } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import AtelierData from "../Components/AtelierData";
import { useDispatch } from 'react-redux';
import { cartActions } from "../Store/cartSlice";

function AtelirerViewCard() {
  const { bottleName, productId } = useParams();
  const dispatch =  useDispatch()
 
  const [info, setInfo] = useState(true);
  const handleInfoT = () => {
    setInfo(true);
  };
  const handleInfoF = () => {
    setInfo(false);
  };

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
      dispatch(cartActions.addItemToCart({
        id,
       title,
        price, isEngrave: false
      }))
      
  
    }
   
    
  
    const buttonText = 'Add To Cart'

  const floral = Colors.find((obj) => obj.theme === "Floral and Fauna");
  const floralLink = floral.data.map(function (color, index) {
    return (
      <Link key={index} to={`/product/Atelier/${bottleName}/${color.id}`}>
        <img
          className="border border-gray-300 w-6 h-6 rounded-full"
          src={color.imgUrl}
          alt=""
        />{" "}
      </Link>
    );
  });
  const sporty = Colors.find((obj) => obj.theme === "Sporty");
  const sportyLink = sporty.data.map(function (color, index) {
    return (
      <Link key={index} to={`/product/Atelier/${bottleName}/${color.id}`}>
        <img
          className="border border-gray-300 w-6 h-6 rounded-full"
          src={color.imgUrl}
          alt=""
        />{" "}
      </Link>
    );
  });
  const bestBuddies = Colors.find((obj) => obj.theme === "Best Buddies");
  const bestBuddiesLink = bestBuddies.data.map(function (color, index) {
    return (
      <Link key={index} to={`/product/Atelier/${bottleName}/${color.id}`}>
        <img
          className="border border-gray-300 w-6 h-6 rounded-full"
          src={color.imgUrl}
          alt=""
        />{" "}
      </Link>
    );
  });
  const justKidding = Colors.find((obj) => obj.theme === "Just Kidding");
  const justKiddingLink = justKidding.data.map(function (color, index) {
    return (
      <Link key={index} to={`/product/Atelier/${bottleName}/${color.id}`}>
        <img
          className="border border-gray-300 w-6 h-6 rounded-full"
          src={color.imgUrl}
          alt=""
        />{" "}
      </Link>
    );
  });
  const teen = Colors.find((obj) => obj.theme === "Teen");
  const teenLink = teen.data.map(function (color, index) {
    return (
      <Link key={index} to={`/product/Atelier/${bottleName}/${color.id}`}>
        <img
          className="border border-gray-300 w-6 h-6 rounded-full"
          src={color.imgUrl}
          alt=""
        />{" "}
      </Link>
    );
  });
  const nirvana = Colors.find((obj) => obj.theme === "Nirvana");
  const nirvanaLink = nirvana.data.map(function (color, index) {
    return (
      <Link key={index} to={`/product/Atelier/${bottleName}/${color.id}`}>
        <img
          className="border border-gray-300 w-6 h-6 rounded-full"
          src={color.imgUrl}
          alt=""
        />{" "}
      </Link>
    );
  });
  const limitedEdition = Colors.find((obj) => obj.theme === "Limited Edition");
  const limitedEditionLink = limitedEdition.data.map(function (color, index) {
    return (
      <Link key={index} to={`/product/Atelier/${bottleName}/${color.id}`}>
        <img
          className="border border-gray-300 w-6 h-6 rounded-full"
          src={color.imgUrl}
          alt=""
        />{" "}
      </Link>
    );
  });
  const magicalArt = Colors.find((obj) => obj.theme === "Magical Art");
  const magicalArtLink = magicalArt.data.map(function (color, index) {
    return (
      <Link key={index} to={`/product/Atelier/${bottleName}/${color.id}`}>
        <img
          className="border border-gray-300 w-6 h-6 rounded-full"
          src={color.imgUrl}
          alt=""
        />{" "}
      </Link>
    );
  });

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
              <div className="flex flex-col  items-start space-y-4">
                {/* floral */}
                <div className="flex space-x-4 items-center">
                  <h3 className="text-sm hover:underline duration-1000 w-28 text-gray-500 font-mon">
                    Floral and Fauna
                  </h3>
                  <div className="flex space-x-2 ">{floralLink}</div>
                </div>
                {/* sporty */}
                <div className="flex space-x-4 justify-start items-center">
                  <h3 className="text-sm w-28 text-gray-500 font-mon">
                    Sporty
                  </h3>
                  <div className="flex space-x-2 ">{sportyLink}</div>
                </div>
                {/* bestBuddies */}
                <div className="flex space-x-4 justify-start items-center">
                  <h3 className="text-sm w-28 text-gray-500 font-mon">
                    Best Buddies
                  </h3>
                  <div className="flex space-x-2 ">{bestBuddiesLink}</div>
                </div>
                {/* just Kidding */}
                <div className="flex space-x-4 justify-start items-center">
                  <h3 className="text-sm w-28 text-gray-500 font-mon">
                    Just Kidding
                  </h3>
                  <div className="flex space-x-2 ">{justKiddingLink}</div>
                </div>
                {/* magical Art */}
                <div className="flex space-x-4 justify-start items-center">
                  <h3 className="text-sm w-28 text-gray-500 font-mon">
                    Magical Art
                  </h3>
                  <div className="flex space-x-2 ">{magicalArtLink}</div>
                </div>
                {/* nirvana */}
                <div className="flex space-x-4 justify-start items-center">
                  <h3 className="text-sm w-28 text-gray-500 font-mon">
                    Nirvana
                  </h3>
                  <div className="flex space-x-2 ">{nirvanaLink}</div>
                </div>
                {/* teen */}
                <div className="flex space-x-4 justify-start items-center">
                  <h3 className="text-sm w-28 text-gray-500 font-mon">Teen</h3>
                  <div className="flex space-x-2 ">{teenLink}</div>
                </div>
                {/* limitedEdition */}
                <div className="flex space-x-4 justify-start items-center">
                  <h3 className="text-sm w-28 text-gray-500 font-mon">
                    Limited Edition
                  </h3>
                  <div className="flex space-x-2 ">{limitedEditionLink}</div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <h4 className="font-bold font-roboto">Size</h4>
              <div className="flex  font-light text-base">
                <div className="underline underline-offset-4 text-sm border-gray-500">
                  {bottle.capacity}ml
                </div>
              </div>
            </div>

            <div className="flex items-center  space-x-4">
              <h5 className="font-semibold text-xl">₹{bottle.price}</h5>
              <div className="flex space-x-4">
              <button
                onClick={handleCartData}
                className="bg-[#000000] rounded-3xl text-white px-4  h-10 "
              >
                {buttonText}
              </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-evenly bg-white md:pt-20 sm:mt-10 sm:mx-6 md:mx-0 ">
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
              Skip the bland disposable bottles and show off your unique style
              or mood with a water bottle. Speedex Light blue Simplex
              single-wall 1000 ML Stainless Steel Water Bottle with a newly
              designed smart cap. Exquisitely holding varying qualities of Leak
              Proof, BPA-free fridge bottle, and Grade SS201 value. The
              excellent go-to choice for everyday use for school, home, kitchen,
              gym & traveling, etc. Standard pickup because of its slim and
              lightweight design.
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
                from India . Only Manufacturing defect products are available
                for RETURN. Please click pictures of the products while
                initiating the return process.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AtelirerViewCard;
