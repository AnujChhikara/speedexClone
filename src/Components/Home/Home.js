

function Home() {
  
  return (
    <div className="absolute top-40 align  ">
      <div className="flex">
        <div className={`flex justify-center bottle w-44  `}>
          <img
            className="md:h-[440px] sm:h-80 md:-rotate-60 sm:-rotate-50 sm:ml-10 md:ml-0     "
            src="/Images/b.webp"
            alt=""
          />
          <img
            className={`h-[440px] md:block sm:hidden rotate-12 `}
            src="https://cdn.shopify.com/s/files/1/0563/5866/6447/products/Apple_3.png?v=1638971345"
            alt=""
          />
          <img
            className={`h-[440px] md:block sm:hidden  rotate-45 mt-12 `}
            src="https://cdn.shopify.com/s/files/1/0563/5866/6447/products/Blue.png?v=1638950551"
            alt=""
          />
        </div>
        <div className="md:w-[360px] space-y-6 text-center flex-col sm:w-44 tracking-tighter md:font-bold text-pink-700  md:text-5xl sm:text-sm font-medium md:ml-60 flex items-start relative  sm:mt-2">
          <h1 className="underline">

          Sustainable Sips:</h1> <span className="text-4xl text-pink-500">Steel and Printed Water Bottles for Eco-Conscious Living</span>
          
        </div>
      </div>
    </div>
  );
}
export default Home;
