

function Home() {
  
  return (
    <header className="absolute top-40 align  ">
      <div className="flex">
        <div className={`flex justify-center bottle w-44  `}>
          <img
            className="md:h-[440px] sm:h-80 md:-rotate-60 sm:-rotate-50 sm:ml-10 md:ml-0     "
            src="https://res.cloudinary.com/dmurcewte/image/upload/v1709131650/b_xuvb5n.webp"
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
        <div className="md:w-[500px] text-center flex-col justify-center  sm:w-44  md:font-bold  md:text-5xl sm:text-sm font-medium md:ml-60 flex relative sm:mt-2">
        <div class="container md:block sm:hidden">
  <div class="wrapper headiing-text">
    <h1 className="heading"><p className="">Rapid Refresh</p> Speedex's Stainless Hydration Revolution</h1>
  </div>
  
</div>
<div className="md:hidden sm:block">
  <h1 className="outline">Speedex's Stainless Bottles</h1>
  </div>
          
        </div>
      </div>
    </header>
  );
}
export default Home;
