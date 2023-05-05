import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1500,
});
function Body() {
  return (
    <div>
      <div className="marquee">
        <div className="track">
          <div className="flex space-x-8 ">
            <h2 className="md:text-[90px] sm:text-[60px] mr-2 ">
              #apka
              <span className="content  ml-4  md:pr-[410px] sm:pr-[270px]">
                <span>Hydration</span>
                <span>Hydration</span>
              </span>
              partner.
            </h2>
            <h2 className="md:text-[90px] sm:text-[60px] mr-2 ">
              #apka
              <span className="content ml-4  md:pr-[410px] sm:pr-[270px]">
                <span>Hydration</span>
                <span>Hydration</span>
              </span>
              partner.
            </h2>{" "}
            <h2 className="md:text-[90px] sm:text-[60px] mr-2 ">
              #apka
              <span className="content ml-4 md:pr-[410px] sm:pr-[270px]">
                <span>Hydration</span>
                <span>Hydration</span>
              </span>
              partner.
            </h2>{" "}
            <h2 className="md:text-[90px] sm:text-[60px] mr-2 ">
              #apka
              <span className="content  ml-4 md:pr-[410px] sm:pr-[270px]">
                <span>Hydration</span>
                <span>Hydration</span>
              </span>
              partner.
            </h2>{" "}
            <h2 className="md:text-[90px] sm:text-[60px] mr-2 ">
              #apka
              <span className="content  ml-4 md:pr-[410px] sm:pr-[270px]">
                <span>Hydration</span>
                <span>Hydration</span>
              </span>
              partner.
            </h2>{" "}
            <h2 className="md:text-[90px] sm:text-[60px] mr-2 ">
              #apka
              <span className="content  ml-4 md:pr-[410px] sm:pr-[270px]">
                <span>Hydration</span>
                <span>Hydration</span>
              </span>
              partner.
            </h2>
          </div>
        </div>
      </div>
      {/* first card */}
      <div
        data-aos="slide-right"
        className="md:flex md:flex-row sm:flex sm:flex-col justify-around items-center md:mt-20 sm:mt-0  sm:ml-0 "
      >
        <div className="">
          <div className="flex flex-col md:justify-start sm:justify-center md:items-start sm:items-center  md:w-72 sm:w-60 md:space-y-6 sm:space-y-2 md:mr-24 sm:mr-0 sm:mx-4 md:mx-0">
            <h2 className="md:text-[56px] sm:text-[40px] text-black sm:font-medium md:font-normal">
              Single Wall
            </h2>
            <h4 className="sm:text-[14px] text-gray-600 sm:text-center md:text-left sm:pb-1  md:text-base">
              Stay cool and hydrated with our stylish single wall bottles.
            </h4>
            <a href="/single-wall">
              <button className="bg-black hover:bg-gray-800 sm:px-1 sm:py-1.5 text-white md:text-md sm:text-[11px] md:px-4 md:w-28 sm:w-24 md:py-3 rounded-3xl">
                SHOP NOW
              </button>
            </a>
          </div>
        </div>
        <div className="flex sm:mt-4 md:mt-0">
          <div className="flex flex-col justify-center items-center ">
            <a href="/single-wall">
              <img
                className="md:w-60 sm:w-36"
                src="https://speedexind.com/wp-content/uploads/2023/02/simplex-sipp-logo.png"
                alt=""
              />{" "}
            </a>
            <h3 className="md:text-xl sm:text-[8px]">Simplex Dual tone</h3>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <a href="/single-wall">
              <img
                className="md:w-60 sm:w-36"
                src="https://speedexind.com/wp-content/uploads/2023/02/drip-tip-home.png"
                alt="poster"
              />{" "}
            </a>
            <h3 className="md:text-xl sm:text-[8px]">Drip Trip</h3>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <a href="/single-wall">
              {" "}
              <img
                className="md:w-60 sm:w-36"
                src="https://speedexind.com/wp-content/uploads/2023/02/liqaitic-home.png"
                alt=""
              />{" "}
            </a>
            <h3 className="md:text-xl sm:text-[8px]">Liquatic</h3>
          </div>
        </div>
      </div>
      {/* second vard */}

      <div
        data-aos="slide-left"
        className="md:flex md:flex-row sm:flex sm:flex-col md:justify-around sm:justify-center items-center md:mt-20 sm:mt-10 "
      >
        <div className="">
          <div className="flex flex-col md:justify-start sm:justify-center md:items-start sm:items-center  md:w-72 sm:w-60 md:space-y-6 sm:space-y-2 md:mr-24 sm:mr-0 sm:mx-4 md:mx-0">
            <h2 className="md:text-[58px] sm:text-[40px] text-black sm:font-medium md:font-normal">
              Hot N Cold
            </h2>
            <h4 className="sm:text-[14px] text-gray-600 sm:text-center md:text-left sm:pb-1  md:text-base">
              Stay refreshed no matter the temperature.
            </h4>
            <a href="/hot-n-cold">
              <button className="bg-black hover:bg-gray-800 sm:px-1 sm:py-1.5 text-white md:text-md sm:text-[11px] md:px-4 md:w-28 sm:w-24 md:py-3 rounded-3xl">
                SHOP NOW
              </button>
            </a>
          </div>
        </div>
        <div className="flex sm:mt-4 md:mt-0">
          <div className="flex flex-col justify-center items-center ">
            <a href="/hot-n-cold">
              <img
                className="md:w-60 sm:w-36"
                src="https://speedexind.com/wp-content/uploads/elementor/thumbs/blue-pygn9vaewne0tpy2p8qal4gn2yak4dm45csd0nhcmk.png"
                alt=""
              />{" "}
            </a>
            <h3 className="md:text-xl sm:text-[8px]">Milo</h3>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <a href="/hot-n-cold">
              <img
                className="md:w-60 sm:w-36"
                src="https://speedexind.com/wp-content/uploads/2023/03/shark-new.png"
                alt="poster"
              />{" "}
            </a>
            <h3 className="md:text-xl sm:text-[8px]">Shark</h3>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <a href="/hot-n-cold">
              {" "}
              <img
                className="md:w-60 sm:w-36"
                src="https://speedexind.com/wp-content/uploads/2023/03/flasq-black-420x455.png"
                alt=""
              />{" "}
            </a>
            <h3 className="md:text-xl sm:text-[8px]">Flasq</h3>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="flex flex-col md:space-y-20 sm:space-y-8 md:mt-44 sm:mt-20 md:mb-20 sm:mb-4">
        {/* first set */}
        <div className="md:flex md:flex-row sm:flex sm:flex-col sm:space-y-8 md:space-y-0 justify-center items-center md:space-x-10 sm:space-x-0">
          <div className="lg:w-[615px] lg:h-[922px] sm:w-[336px] sm:h-[504px]  shadow-lg shadow-gray-700 sm:bg-fifthCard lg:bg-firstCard rounded-lg flex flex-col justify-center space-y-0 items-center">
            <h3 className="text-5xl mt-32 font-semibold text-white">Speedex</h3>
            <h3 className="text-5xl mt-32 font-semibold text-white">Atelier</h3>
            <a href="/atelier">
              <button className="text-sm bg-white mt-4 px-4 py-3 rounded-3xl hover:-translate-y-0.5 duration-700 shadow-md">
                Click here
              </button>
            </a>
          </div>
          <div className="lg:w-[615px] lg:h-[922px] sm:w-[336px] sm:h-[504px]  shadow-lg shadow-gray-700 sm:bg-sixCard  lg:bg-secondCard rounded-lg flex flex-col justify-center  space-y-4 items-center">
            <h3 className="text-5xl mt-32 font-semibold  text-white">
              Gifting
            </h3>
            <button className="text-sm bg-white px-4 py-3 rounded-3xl hover:-translate-y-0.5 duration-700 shadow-md">
              Click here
            </button>
          </div>
        </div>
        {/* second set */}
        <div className="md:flex md:flex-row sm:flex sm:flex-col sm:space-y-8 md:space-y-0 justify-center items-center md:space-x-10 sm:spcae-x-0">
          <div className="lg:w-[615px] lg:h-[922px] sm:w-[336px] sm:h-[504px]  shadow-lg shadow-gray-700 sm:bg-sevenCard  lg:bg-thirdCard rounded-lg flex flex-col justify-center  space-y-4 items-center">
            <h3 className="text-5xl mt-32 font-semibold text-white">
              Accessories
            </h3>
            <button className="text-sm bg-white px-4 py-3 rounded-3xl hover:-translate-y-0.5 duration-700 shadow-md">
              Click here
            </button>
          </div>
          <div className="lg:w-[615px] lg:h-[922px] sm:w-[336px] sm:h-[504px]  shadow-lg shadow-gray-700 sm:bg-eightCard  lg:bg-fourthCard rounded-lg flex flex-col justify-center  space-y-4 items-center">
            <h3 className="text-5xl mt-32 font-semibold text-white">Video</h3>
            <a href="https://www.instagram.com/p/CqUVVwojKum/?hl=en">
              <button className="text-sm bg-white px-4 py-3 rounded-3xl hover:-translate-y-0.5 duration-700 shadow-md">
                watch here
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
