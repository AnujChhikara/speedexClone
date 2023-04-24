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
    <div className="absolute top-40 align ">
      <div className="flex">
        <div className={`flex justify-center bottle w-44   `}>
          <img
            className="h-[440px] -rotate-60 "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/Images/b.webp"
            alt=""
          />
          <img
            className={`h-[440px] rotate-12 ${
              isHover ? "" : "opacity-0"
            } transition-opacity duration-500 ease-in-out `}
            src="https://cdn.shopify.com/s/files/1/0563/5866/6447/products/Apple_3.png?v=1638971345"
            alt=""
          />
          <img
            className={`h-[440px] rotate-45 mt-12 ${
              isHover ? "" : "opacity-0 "
            }  transition-opacity  duration-500 ease-in-out`}
            src="https://cdn.shopify.com/s/files/1/0563/5866/6447/products/Blue.png?v=1638950551"
            alt=""
          />
        </div>
        <div className="w-[400px] sm:hidden lg:block text-4xl font-medium flex ml-44 items-start relative mt-48">
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
