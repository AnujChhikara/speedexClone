function Body() {
  return (
    <div>
      <div className="marquee">
        <div className="track">
          <div className="flex space-x-8 ">
            <h2 className="text-[90px] mr-2 ">
              #apka
              <span className="content  ml-4  pr-[410px]">
                <span>Hydration</span>
                <span>Hydration</span>
              </span>
              partner.
            </h2>
            <h2 className="text-[90px] mr-2 ">
              #apka
              <span className="content ml-4  pr-[410px]">
                <span>Hydration</span>
                <span>Hydration</span>
              </span>
              partner.
            </h2>{" "}
            <h2 className="text-[90px] mr-2 ">
              #apka
              <span className="content ml-4  pr-[410px]">
                <span>Hydration</span>
                <span>Hydration</span>
              </span>
              partner.
            </h2>{" "}
            <h2 className="text-[90px] mr-2 ">
              #apka
              <span className="content  ml-4 pr-[410px]">
                <span>Hydration</span>
                <span>Hydration</span>
              </span>
              partner.
            </h2>{" "}
            <h2 className="text-[90px] mr-2 ">
              #apka
              <span className="content  ml-4 pr-[410px]">
                <span>Hydration</span>
                <span>Hydration</span>
              </span>
              partner.
            </h2>{" "}
            <h2 className="text-[90px] mr-2 ">
              #apka
              <span className="content  ml-4 pr-[410px]">
                <span>Hydration</span>
                <span>Hydration</span>
              </span>
              partner.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 ml-10">
        <div className="flex flex-col w-72 space-y-6 mr-24">
          <h2 className="text-7xl text-black">Single Wall</h2>

          <button className="bg-black text-white text-md px-2 w-28 py-3 rounded-3xl">
            SHOP NOW
          </button>
        </div>
        <div className="flex flex-col justify-center items-center w-60">
          <img
            className="w-60"
            src="https://speedexind.com/wp-content/uploads/2023/02/simplex-sipp-logo.png"
            alt=""
          />
          <h3 className="text-xl">Simplex Dual tone</h3>
        </div>
        <div className="flex flex-col justify-center items-center w-60">
          <img
            className="w-60"
            src="https://speedexind.com/wp-content/uploads/2023/02/drip-tip-home.png"
            alt="poster"
          />
          <h3 className="text-xl">Drip Trip</h3>
        </div>
        <div className="flex flex-col justify-center items-center w-60">
          <img
            className="w-60"
            src="https://speedexind.com/wp-content/uploads/2023/02/liqaitic-home.png"
            alt=""
          />
          <h3 className="text-xl">Liquatic</h3>
        </div>
      </div>
      {/* the originals */}
      <div className="flex justify-center items-center mt-20 ml-10">
        <div className="flex flex-col w-72 space-y-6 mr-24">
          <h2 className="text-7xl pop text-black">HOT N COLD</h2>

          <button className="bg-black text-white text-md px-2 w-28 py-3 rounded-3xl">
            SHOP NOW
          </button>
        </div>
        <div className="flex flex-col justify-center items-center w-60">
          <img
            className="w-72"
            src="https://speedexind.com/wp-content/uploads/elementor/thumbs/blue-pygn9vaewne0tpy2p8qal4gn2yak4dm45csd0nhcmk.png"
            alt=""
          />
          <h3 className="text-xl">MILO</h3>
        </div>
        <div className="flex flex-col justify-center items-center w-60">
          <img
            className="w-72"
            src="https://speedexind.com/wp-content/uploads/2023/03/shark-new.png"
            alt=""
          />
          <h3 className="text-xl">Shark</h3>
        </div>
        <div className="flex flex-col justify-center items-center w-60">
          <img
            className="w-72"
            src="https://speedexind.com/wp-content/uploads/2023/03/flasq-black-420x455.png"
            alt=""
          />
          <h3 className="text-xl">Flask</h3>
        </div>
      </div>
      {/* cards */}
      <div className="flex flex-col space-y-20 mt-44 mb-20">
        {/* first set */}
        <div className="flex justify-center  items-center space-x-10">
          <div className="w-[600px] h-[800px] bg-firstCard rounded-lg flex flex-col justify-center  space-y-4 items-center">
            <h3 className="text-5xl mt-32 font-semibold text-white">Atelier</h3>
            <button className="text-sm bg-white px-4 py-3 rounded-3xl hover:-translate-y-0.5 duration-700 shadow-md">
              Click here
            </button>
          </div>
          <div className="w-[600px] h-[800px] bg-secondCard rounded-lg flex flex-col justify-center  space-y-4 items-center">
            <h3 className="text-5xl mt-32 font-semibold  text-white">
              Gifting
            </h3>
            <button className="text-sm bg-white px-4 py-3 rounded-3xl hover:-translate-y-0.5 duration-700 shadow-md">
              Click here
            </button>
          </div>
        </div>
        {/* second set */}
        <div className="flex justify-center items-center space-x-10">
          <div className="w-[600px] h-[800px] bg-thirdCard rounded-lg flex flex-col justify-center  space-y-4 items-center">
            <h3 className="text-5xl mt-32 font-semibold text-white">
              Accessories
            </h3>
            <button className="text-sm bg-white px-4 py-3 rounded-3xl hover:-translate-y-0.5 duration-700 shadow-md">
              Click here
            </button>
          </div>
          <div className="w-[600px] h-[800px] bg-fourthCard rounded-lg flex flex-col justify-center  space-y-4 items-center">
            <h3 className="text-5xl mt-32 font-semibold text-white">Video</h3>
            <button className="text-sm bg-white px-4 py-3 rounded-3xl hover:-translate-y-0.5 duration-700 shadow-md">
              click here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
