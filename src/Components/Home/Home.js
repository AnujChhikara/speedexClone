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
        <div className="md:w-[400px] sm:w-40  md:text-4xl sm:text-xl font-medium flex md:ml-44 sm:ml-6 items-start relative md:mt-48 sm:mt-8">
          <h1>
            Join the Reusable Revolution with Speedex's Eco-Friendly Water
            Bottles.
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Home;
