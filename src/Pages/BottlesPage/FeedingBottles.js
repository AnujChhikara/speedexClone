import { getBottle } from "../../Components/functions";

function feedingBottles() {
  
  const silkBottles = getBottle("Silk")
  const blissBottles = getBottle("Bliss")

  
  return (
    <div>
      <div className="flex flex-col sm:pt-28  justify-center items-center mb-28">
        <h2 className="md:text-[100px] sm:text-[48px] text-gray-500 font-roboto">
          Feeding Bottles
        </h2>
        <p className="text-gray-600 md:w-[650px] sm:w-[330px]">
          The one-stop shop for purchasing kid's stainless steel feeding
          bottles, Speedex has products that are BPA-free and leakproof. Speedex
          is one of the top manufacturers of stainless steel feeding bottles in
          India since it offers premium quality BPA- free steel feeding bottles
          at reasonable costs.
        </p>
      </div>

      <div className="flex flex-col space-y-20">
        <div className="flex flex-col items-center">
          <h3 className=" uppercase md:text-[80px] sm:text-[40px] font-roboto">
            Maq Pure Silk
          </h3>
          <div className="flex flex-wrap  justify-center">{silkBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase md:text-[80px] sm:text-[40px] font-roboto mb-4">
            Maq pure bliss
          </h3>
          <div className="flex flex-wrap justify-center">{blissBottles}</div>
        </div>
      </div>
    </div>
  );
}
export default feedingBottles;
