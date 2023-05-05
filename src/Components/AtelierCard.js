import { useState } from "react";
import { crop, scale } from "@cloudinary/url-gen/actions/resize";
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
  const milo500Images = myImage
    .resize(scale().height(300))
    .resize(crop().height(270).aspectRatio(2.5))
    .resize(scale().height(280));
  return (
    <a
      href={`/product/${props.bottleName}/${props.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${isHover ? "" : ""}`}
    >
      <div className="md:w-[350px] sm:w-40 flex flex-col items-center  space-y-3">
        <div>
          <h4
            className={`${
              isHover ? " block" : "hidden"
            } absolute sm:mt-20 sm:ml-12 md:mt-40 md:ml-[106px] h-7 text-white rounded flex items-center justify-center font-semibold text-sm font-Sans duration-1000 bg-black sm:w-16 md:w-20`}
          >
            View
          </h4>

          <div className="">
            <AdvancedImage cldImg={milo500Images} />
          </div>
        </div>
        <h5 className="font-medium lg:text-lg sm:text-sm">
          {props.bottleName} {props.name}
        </h5>

        <div className="flex space-x-2 md:text-lg sm:text-xs font-medium">
          <h6>₹{props.price}.00</h6>
        </div>
      </div>
    </a>
  );
}
export default AtelierCard;
