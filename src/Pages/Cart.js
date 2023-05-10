import AtelierData from "../Components/AtelierData";
import AllBottleData from "../Components/AllBottlesData";
import { fit } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { useState } from "react";
function Cart() {
  const [quantity, setQuantity] = useState(1);
  const cartData = JSON.parse(localStorage.getItem("cartData"));
  if (!cartData) {
    return (
      <div className="flex flex-col sm:pt-24  space-y-4 justify-center font-play items-center text-4xl w-screen mt-20 px-12 ">
        <img
          src="https://res.cloudinary.com/dmurcewte/image/upload/v1683467525/112087-empty_ugrh1e.gif"
          alt=""
          className="md:h-96"
        />
        <div className="flex flex-col items-center space-y-4">
          <h3>Your cart is empty.</h3>
          <a href="/atelier">
            <h4 className="text-xl bg-teal-500 px-5 rounded-3xl shadow-lg hover:-translate-y-1 duration-700 shadow-teal-300  py-3">
              Start Shoping
            </h4>
          </a>
        </div>
      </div>
    );
  }

  let allBottles = null;

  // First, search for the bottle in AtelierData
  const atelierBottles = AtelierData.find(
    (obj) => obj.id === cartData.bottleName
  );

  // If the bottle is found in AtelierData, then update the value of allBottles
  if (atelierBottles) {
    allBottles = atelierBottles;
  } else {
    // If the bottle is not found in AtelierData, search for it in allBottleData
    const allBottle = AllBottleData.find(
      (obj) => obj.id === cartData.bottleName
    );

    // If the bottle is found in allBottleData, update the value of allBottles
    if (allBottle) {
      allBottles = allBottle;
    }
  }
  const bottle = allBottles.data.find((obj) => obj.id === cartData.product);

  let image = null;

  if (allBottles.id === "Milo-500") {
    // Update the value of image if bottle.id is "milo"
    image = new CloudinaryImage(`Milo_500/${bottle.imdId}`, {
      cloudName: "dmurcewte",
    }).resize(fit().width(100).height(170));
  }
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="flex  flex-col space-y-6 md:w-[90%] justify-center font-play sm:pt-40  items-center text-xl  mt-20 md:px-4 pb-20">
      <div className="border md:flex md:flex-row sm:flex md:w-[90%] sm:w-80 sm:flex-col sm:space-y-4 md:space-y-0 sm:p-6  shadow-lg bg-white shadow-gray-400 justify-around items-center border-gray-300 md:p-8">
        {allBottles.id === "Milo-500" ? (
          <AdvancedImage cldImg={image} />
        ) : (
          <img className="sm:w-28" src={bottle.imgUrl} alt="" />
        )}
        <div className="flex items-center space-x-1">
          <h5>{cartData.bottleName}</h5>
          <div className="text-4xl mb-1">-</div>
          <h5>{bottle.name}</h5>
        </div>
        <h5>{bottle.capacity ? bottle.capacity : allBottles.capacity}ml</h5>
        <div className="items-center space-y-2 flex flex-col">
          <h5>Quantity</h5>
          <div className="flex justify-center shadow-lg shadow-gray-400 items-center space-x-5 border border-gray-600 px-6 text-2xl py-2">
            <button
              className="text-4xl  font-extrabold"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <h6>{quantity}</h6>
            <button
              className="text-3xl  font-extrabold"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col font-bold  items-center">
          <h5>Total</h5>
          <h5>₹{bottle.price * quantity}</h5>
        </div>
        <button onClick={handleClick}>
          <svg
            className="w-10 fill-red-400 face duration-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12V17"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 12V17"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 7H20"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div>
        <button className="bg-black px-6 py-3 mt-10 text-white">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
export default Cart;
