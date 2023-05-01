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
      <div className="w-[350px] flex flex-col items-center  space-y-3">
        <div>
          <h4
            className={`${
              isHover ? " block" : "hidden"
            } absolute mt-40 ml-[88px] h-7 text-white rounded flex items-center justify-center font-semibold text-sm font-Sans duration-1000 bg-black w-20`}
          >
            View
          </h4>
          <img className="w-64 " src={props.imgUrl} alt="" />
        </div>
        <h5 className="font-medium">
          {props.bottleName} {props.name}
        </h5>

        <div className="flex space-x-2 text-lg font-medium">
          <h6 className="line-through text-gray-400">₹{props.cutPrice}.00</h6>
          <h6>₹{props.price}.00</h6>
        </div>
      </div>
    </a>
  );
}
export default BottleCard;
