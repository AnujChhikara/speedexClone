import { getBottle } from "../../Components/functions";

function DoubleWall() {
 
  const miloBottles = getBottle("Milo") 
  const checkMateBottles = getBottle("Check & Mate") 
  const eliteGoldBottles = getBottle("EliteGold")
  const flasqBottles =getBottle("Flasq")
  const checkOverBottles = getBottle("Checkover")
  const royalGoldBottles = getBottle("RoyalGold")
  const imperioBottles = getBottle("Imperio")
  const sharkBottles = getBottle("Shark")
  

  return (
    <div>
      <div className="flex flex-col sm:pt-28  justify-center items-center mb-32">
        <h2 className="md:text-[100px] sm:text-[48px] text-gray-500 font-roboto">
          HOT n COLD
        </h2>
        <p className="text-gray-600 md:w-[650px] sm:w-[330px]">
          Carry your favorite beverage hot or cold on the go. Enjoy your
          favorite drink anytime, anywhere with Speedex Insulated double wall
          vacuum steel bottles. Find your favorite from the series of our
          durable finish & stylish daily-use steel water bottles.
        </p>
      </div>

      <div className="flex flex-col space-y-20">
        <div className="flex flex-col items-center">
          <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto">
            Milo
          </h3>
          <div className="flex flex-wrap  justify-center">{miloBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto mb-4">
            Check & Mate
          </h3>
          <div className="flex flex-wrap justify-center">
            {checkMateBottles}
          </div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto mb-4">
            Elite Gold
          </h3>
          <div className="flex flex-wrap justify-center">
            {eliteGoldBottles}
          </div>
        </div>
     
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto mb-4">
            flasq
          </h3>
          <div className="flex flex-wrap justify-center">{flasqBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto mb-4">
            checkover
          </h3>
          <div className="flex flex-wrap justify-center">
            {checkOverBottles}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto mb-4">
            Royal Gold
          </h3>
          <div className="flex flex-wrap justify-center">
            {royalGoldBottles}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto mb-4">
            Imperio
          </h3>
          <div className="flex flex-wrap justify-center">{imperioBottles}</div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto mb-4">
            Shark
          </h3>
          <div className="flex flex-wrap justify-center">{sharkBottles}</div>
        </div>
      </div>
      
    </div>
  );
}
export default DoubleWall;
