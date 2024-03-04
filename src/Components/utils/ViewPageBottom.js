import React,{useState} from 'react'

function ViewPage() {
    const [info, setInfo] = useState(true);
    const handleInfoT = () => {
      setInfo(true);
    };
    const handleInfoF = () => {
      setInfo(false);
    };
  
  return (
    <div className="flex md:justify-evenly bg-white md:pt-20 sm:mt-10 sm:mx-6 md:mx-0 ">
          <div className="md:block sm:hidden w-80"></div>
          <div className=" md:block sm:hidden w-[290px]"></div>
          <div className="shadow-gray-400 shadow-md px-8 py-4 rounded-xl flex flex-col w-[450px]">
            <div className="flex justify-around">
              <h2
                className={`hover:underline hover:text-blue-600 cursor-pointer ${
                  info ? "text-blue-700" : ""
                }`}
                onClick={handleInfoT}
              >
                Description
              </h2>
              <h2
                className={`hover:underline hover:text-blue-600 cursor-pointer ${
                  info ? "" : "text-blue-700"
                }`}
                onClick={handleInfoF}
              >
                Delivery
              </h2>
            </div>
            <hr className="border-0.5 mt-2 border-black " />
            <p
              className={`${
                info ? "block" : "hidden"
              } px-2 py-4 text-gray-500 text-sm`}
            >
              Skip the bland disposable bottles and show off your unique style
              or mood with a water bottle. Speedex Light blue Simplex
              single-wall 1000 ML Stainless Steel Water Bottle with a newly
              designed smart cap. Exquisitely holding varying qualities of Leak
              Proof, BPA-free fridge bottle, and Grade SS201 value. The
              excellent go-to choice for everyday use for school, home, kitchen,
              gym & traveling, etc. Standard pickup because of its slim and
              lightweight design.
            </p>
            <div
              className={`${info ? "hidden" : "block"} text-gray-500 px-4 py-2`}
            >
              <div>
                <h4 className=" uppercase font-semibold mb-2 mt-1">
                  Standard delivery
                </h4>
                <ul className=" list-disc space-y-1">
                  <li> 4 to 7 days of conformation</li>
                  <li>No Delivery Charges</li>
                  <li>Cash on Delivery not available</li>
                </ul>
              </div>
              <div className=" font-medium mt-4">
                *COD available on Amazon & Flipkart *Click below to return items
                from India . Only Manufacturing defect products are available
                for RETURN. Please click pictures of the products while
                initiating the return process.
              </div>
            </div>
          </div>
        </div>
  )
}

export default ViewPage