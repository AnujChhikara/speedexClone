import { useState } from "react";

function Home() {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="absolute top-40 align  ">
      <div className="flex">
        <div className={`flex justify-center bottle w-44  `}>
          <img
            className="md:h-[440px] sm:h-80 md:-rotate-60 sm:-rotate-50 sm:ml-10 md:ml-0     "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/Images/b.webp"
            alt=""
          />
          <img
            className={`h-[440px] md:block sm:hidden rotate-12 ${
              isHover ? "" : "opacity-0"
            } transition-opacity duration-500 ease-in-out `}
            src="https://cdn.shopify.com/s/files/1/0563/5866/6447/products/Apple_3.png?v=1638971345"
            alt=""
          />
          <img
            className={`h-[440px] md:block sm:hidden  rotate-45 mt-12 ${
              isHover ? "" : "opacity-0 "
            }  transition-opacity  duration-500 ease-in-out`}
            src="https://cdn.shopify.com/s/files/1/0563/5866/6447/products/Blue.png?v=1638950551"
            alt=""
          />
        </div>
        <div className="md:w-[400px] sm:w-44 tracking-tighter  md:text-2xl sm:text-sm font-medium md:ml-60 flex items-start relative  sm:mt-2">
          <h1>
            Please note that this website is a project that clones the
            e-commerce platform Speedex. The content on this website is solely
            for educational or personal purposes, and all rights to the original
            content belong to Speedex.
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Home;
