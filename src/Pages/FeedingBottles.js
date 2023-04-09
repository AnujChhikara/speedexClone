import BottleCard from "../Components/BottleCard";
import feedingBottlesData from "../Components/FeedingBottles.js/FeedingBottlesData";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
function feedingBottles() {
  const silkData = feedingBottlesData.find((obj) => obj.id === "Silk").data;
  const silkBottles = silkData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="Maq Pure"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const blissData = feedingBottlesData.find((obj) => obj.id === "Bliss").data;
  const blissBottles = blissData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="Maq Pure Bliss"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  return (
    <div>
      <div className="mb-20">
        {" "}
        <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center mb-40">
        <h2 className="text-[100px] text-gray-500 font-roboto">
          Feeding Bottles
        </h2>
        <p className="text-gray-600 w-[650px]">
          The one-stop shop for purchasing kid’s stainless steel feeding
          bottles, Speedex has products that are BPA-free and leakproof. Speedex
          is one of the top manufacturers of stainless steel feeding bottles in
          India since it offers premium quality BPA- free steel feeding bottles
          at reasonable costs.
        </p>
      </div>

      <div className="flex flex-col space-y-20">
        <div className="flex flex-col items-center">
          <h3 className=" uppercase text-[92px] font-roboto">Maq Pure Silk</h3>
          <div className="flex flex-wrap  justify-center">{silkBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase text-[92px] font-roboto mb-4">
            Maq pure bliss
          </h3>
          <div className="flex flex-wrap justify-center">{blissBottles}</div>
        </div>
      </div>
      <div className="pt-20">
        {" "}
        <Footer />
      </div>
    </div>
  );
}
export default feedingBottles;
