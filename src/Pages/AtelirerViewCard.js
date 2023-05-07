import { useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { fit } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import AtelierData from "../Components/AtelierData";
function AtelirerViewCard() {
  const { bottleName, productId } = useParams();

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
  const Image_m5 = new CloudinaryImage(`Milo_500/${bottle.imdId}`, {
    cloudName: "dmurcewte",
  });
  const milo500Images = Image_m5.resize(fit().width(300).height(450));
  return (
    <div>
      <div style={{ backgroundColor: bottle.bgHex }} className="pt-12 ">
        <div
          className={`md:flex md:flex-row sm:flex sm:flex-col md:justify-around sm:justify-center items-center  md:pb-20 md:mx-2 `}
          key={bottle.id}
        >
          <div className="md:flex md:flex-row sm:flex sm:flex-col-reverse sm:-space-y-10 md:-space-y-0  justify-center items-center">
            <h2 className="font-semibold sm:mt-4  md:mt-0 font-nunito text-3xl md:pl-16 md:w-96 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black">
              {bottle.name}
            </h2>

            <div className="pt-10">
              <div className="">
                <AdvancedImage cldImg={milo500Images} />
              </div>
            </div>
          </div>
          <div className="bg-white md:text-lg md:pr-28 sm:w-[330px] md:w-auto md:p-6 sm:mt-8 md:mt-0 sm:p-4 text-[12px] sm:mx-4 md:mx-0  flex flex-col md:space-y-8 sm:space-y-4 shadow-lg rounded-lg shadow-gray-400  duration-1000">
            <div className="font-medium text-md">
              BOTTLES
              <div></div>
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
                <button className="bg-[#000000] rounded-3xl text-white px-4  h-10 ">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:justify-evenly bg-white md:pt-20 sm:mx-6 md:mx-0 ">
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
