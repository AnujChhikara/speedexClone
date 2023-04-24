import { useState } from "react";
import { useParams } from "react-router-dom";
function ViewBottleCard() {
  const { bottleName, productId } = useParams();

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <h2 className="font-semibold font-nunito text-3xl">
          {bottleName} {productId}
        </h2>
        <img
          src="https://speedexind.com/wp-content/uploads/2023/02/black-simplex-420x455.png"
          alt=""
        />
        <div className="bg-white text-lg pr-20 p-6  flex flex-col space-y-8 shadow-md rounded-2xl shadow-gray-600 hover:shadow-xl hover:shadow-gray-600 duration-1000">
          <div className="flex space-x-4">
            <h4 className="font-bold font-roboto">Color</h4>
            <img
              src="https://speedexind.com/wp-content/uploads/2023/01/black-s.png"
              alt=""
            />
            <img
              src="https://speedexind.com/wp-content/uploads/2023/01/blue-s.png"
              alt=""
            />
            <img
              src="https://speedexind.com/wp-content/uploads/2023/02/grey-simplex-icon.png"
              alt=""
            />
            <img
              src="https://speedexind.com/wp-content/uploads/2023/02/matt.png"
              alt=""
            />
          </div>
          <div className="flex space-x-6">
            <h4 className="font-bold font-roboto">Cap</h4>
            <div className="flex space-x-4">
              <img
                src="https://speedexind.com/wp-content/uploads/2023/01/flipper-30x30.png"
                alt=""
              />
              <img
                src="https://speedexind.com/wp-content/uploads/2023/01/sippe-30x30.png"
                alt=""
              />
              <img
                src="https://speedexind.com/wp-content/uploads/2023/01/STEEL-30x30.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex space-x-6">
            <h4 className="font-bold font-roboto">Size</h4>
            <div className="flex space-x-4 font-light text-base">
              <div>750ml</div>
              <div>1000ml</div>
            </div>
          </div>

          <div className="flex space-x-4">
            <h4 className="font-bold font-roboto">ENGRAVE</h4>
            <div className="flex flex-col">
              <label htmlFor="">RS. 30</label>
              <input
                className="border-gray-300 px-4 w-48 h-10 rounded-xl border-2"
                id="engrave"
                type="text"
                maxLength={8}
              />
              <p>8 Character Limit</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold text-base">Price</h4>
            <h5>₹287.00/- per item</h5>
            <div className="flex space-x-4">
              <div className="flex space-x-3 text-3xl border border-gray-500 w-24 px-3 py-2">
                <button>-</button>
                <div>1</div>
                <button>+</button>
              </div>
              <button className="bg-[#28303d] text-white px-2 h-10 ">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-20 mt-20">
        <div className="shadow-gray-400 shadow-md px-8 py-4 rounded-xl flex flex-col w-[450px]">
          <div className="flex justify-around">
            <h2 className="hover:underline hover:text-blue-600 cursor-pointer">
              Description
            </h2>
            <h2 className="hover:underline hover:text-blue-600 cursor-pointer">
              Delivery
            </h2>
          </div>
          <hr className="border-0.5 mt-2 border-black " />
          {/* <p>
          Skip the bland disposable bottles and show off your unique style or
          mood with a water bottle. Speedex Light blue Simplex single-wall 1000
          ML Stainless Steel Water Bottle with a newly designed smart cap.
          Exquisitely holding varying qualities of Leak Proof, BPA-free fridge
          bottle, and Grade SS201 value. The excellent go-to choice for everyday
          use for school, home, kitchen, gym & traveling, etc. Standard pickup
          because of its slim and lightweight design.
        </p> */}
          <p className="px-4 py-2">
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
          </p>
        </div>
      </div>
    </div>
  );
}
export default ViewBottleCard;
