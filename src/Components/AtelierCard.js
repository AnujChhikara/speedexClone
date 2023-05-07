import { useState } from "react";
import { fit } from "@cloudinary/url-gen/actions/resize";

import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
function AtelierCard(props) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const myImage = new CloudinaryImage(`Milo_500/${props.imgId}`, {
    cloudName: "dmurcewte",
  });

  const milo500Images = myImage.resize(fit().width(200).height(250));

  return (
    <a
      href={`/product/Atelier/${props.bottleName}/${props.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${isHover ? "opacity-70" : ""} duration-700`}
    >
      <div className="md:w-[350px] sm:w-40 flex flex-col items-center mb-8  space-y-3">
        <div>
          <h4
            className={`${
              isHover ? " block" : "hidden"
            } absolute sm:mt-20 sm:ml-12 md:mt-40 md:ml-0 sm:h-7 md:h-8  text-white rounded flex items-center justify-center font-semibold text-sm font-Sans duration-1000 bg-black sm:w-16 md:w-24`}
          >
            View
          </h4>

          <div className="">
            <AdvancedImage cldImg={milo500Images} />
          </div>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <h5 className="font-medium lg:text-md sm:text-sm">{props.name}</h5>
          <h6 className="font-medium lg:text-xs sm:text-sm">
            {props.quantity}ml
          </h6>

          <div className="flex md:text-md sm:text-xs font-medium">
            <h6>₹{props.price}.00</h6>
          </div>
        </div>
      </div>
    </a>
  );
}
export default AtelierCard;
