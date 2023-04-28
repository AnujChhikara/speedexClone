import { useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import AllBottleData from "../Components/AllBottlesData";
function ViewBottleCard() {
  const { bottleName, productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [engrave, setEngrave] = useState();
  const [engraveColor, setEngraveColor] = useState("");
  const handleEngraveColor = (e) => {
    const value = e.target.value;
    const checkboxes = document.getElementsByName("engrave-color");
    if (value === engraveColor) {
      // If the same checkbox is clicked again, deselect it
      setEngraveColor("");
    } else {
      // Otherwise, select the clicked checkbox and deselect the previously selected checkbox
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

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };
  const allBottles = AllBottleData.find((obj) => obj.id === bottleName);
  const bottle = allBottles.data[productId - 1];
  const Caps = allBottles.Cap.map(function (item) {
    return <img src={item} alt="" />;
  });
  const Colors = allBottles.Colors.map(function (color) {
    return (
      <a href={`/view/${bottleName}/${color.id}`}>
        <img src={color.link} alt="" />
      </a>
    );
  });

  return (
    <div>
      <div className="flex justify-around items-center mx-8">
        <h2 className="font-semibold font-nunito text-3xl pl-16 w-96">
          {bottleName}
          {"  "}
          {bottle.name}
        </h2>
        <img className="fixed" src={bottle.imgUrl} alt="" />
        <div
          className={`${engraveColor} -rotate-90 mt-52 ml-16 text-lg font-medium relative`}
        >
          {engrave}
        </div>
        <div className="bg-white text-lg pr-28 p-6  flex flex-col space-y-8 shadow-md rounded-2xl shadow-gray-600 hover:shadow-xl hover:shadow-gray-600 duration-1000">
          <div className="flex space-x-4">
            <h4 className="font-bold font-roboto">Color</h4>
            {Colors}
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
              <div>750ml</div>
              <div>1000ml</div>
            </div>
          </div>

          <div
            className={`flex space-x-4 ${
              allBottles.Engrave ? "block" : "hidden"
            }`}
          >
            <h4 className="font-bold font-roboto">ENGRAVE</h4>
            <div className="flex flex-col">
              <label htmlFor="">RS. 30</label>
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
                    <span className="ml-2 text-gray-700">Gray</span>
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
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold text-base">Price</h4>
            <h5>₹{bottle.price}/- per item</h5>
            <div className="flex space-x-4">
              <div className="flex space-x-3 text-3xl border border-gray-500 w-24 px-3 py-2">
                <button onClick={decreaseQuantity}>-</button>
                <div>{quantity}</div>
                <button onClick={increaseQuantity}>+</button>
              </div>
              <button className="bg-[#28303d] text-white px-2 h-10 ">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-[3.5%] mt-20">
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
          <div className="px-4 py-2">
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
