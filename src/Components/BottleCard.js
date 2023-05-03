import { useState } from "react";

function BottleCard(props) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <a
      href={`/view/${props.bottleName}/${props.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${isHover ? "" : ""}`}
    >
      <div className="md:w-[350px] sm:w-40 flex flex-col items-center  space-y-3">
        <div>
          <h4
            className={`${
              isHover ? " block" : "hidden"
            } absolute sm:mt-20 sm:ml-12 md:mt-40 md:ml-[88px] h-7 text-white rounded flex items-center justify-center font-semibold text-sm font-Sans duration-1000 bg-black sm:w-16 md:w-20`}
          >
            View
          </h4>
          <img className="w-64 " src={props.imgUrl} alt="" />
        </div>
        <h5 className="font-medium lg:text-lg">
          {props.bottleName} {props.name}
        </h5>

        <div className="flex space-x-2 md:text-lg  font-medium">
          <h6 className="line-through text-gray-400">₹{props.cutPrice}.00</h6>
          <h6>₹{props.price}.00</h6>
        </div>
      </div>
    </a>
  );
}
export default BottleCard;
