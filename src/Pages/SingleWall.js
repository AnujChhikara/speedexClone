import BottleCard from "../Components/BottleCard";
import AllBottleData from "../Components/AllBottlesData";

function SingleWall() {
  const simplexData = AllBottleData.find((obj) => obj.id === "Simplex").data;
  const simplexBottles = simplexData.map(function (item) {
    
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        key={item.id}
        id={item.id}
        bottleName="Simplex"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
      
    ) ;
  });
  const hydrateData = AllBottleData.find((obj) => obj.id === "Hydrate").data;
  const hydrateBottles = hydrateData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        id={item.id}
        key={item.id}
        bottleName="Hydrate"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const dripTripData = AllBottleData.find((obj) => obj.id === "Drip Trip").data;
  const dripTripBottles = dripTripData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        id={item.id}
        key={item.id}
        bottleName="Drip Trip"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const kurveyData = AllBottleData.find((obj) => obj.id === "Kurvey").data;
  const kurveyBottles = kurveyData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        id={item.id}
        key={item.id}
        bottleName="Kurvey"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const glaciaData = AllBottleData.find((obj) => obj.id === "Glacia").data;
  const glaciaBottles = glaciaData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        id={item.id}
        key={item.id}
        bottleName="Glacia"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const liquaticData = AllBottleData.find((obj) => obj.id === "Liquatic").data;
  const liquaticBottles = liquaticData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        id={item.id}
        key={item.id}
        bottleName="Liquatic"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const kiddoData = AllBottleData.find((obj) => obj.id === "Kiddo").data;
  const kiddoBottles = kiddoData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        id={item.id}
        key={item.id}
        bottleName="Kiddo"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });

  return (
    <div>
      <div className="flex sm:pt-28  flex-col justify-center items-center mb-32">
        <h2 className="md:text-[100px] sm:text-[48px] text-gray-500 font-roboto">
          SINGLE WALL
        </h2>
        <p className="text-gray-600 md:w-[650px] sm:w-[330px]">
          Your Hydration partner-The original Single-walled Stainless Steel
          Bottle. The highest grade that lasts a lifetime & never rusts and has
          completely matched leak-proof properties. Can store carbonated
          beverages - Preserves flavor and freshness. Appropriate for all indoor
          and outdoor uses.
        </p>
      </div>

      <div className="flex flex-col space-y-20">
        <div className="flex flex-col items-center">
          <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto">
            simplex
          </h3>
          <div className="flex flex-wrap  justify-center">{simplexBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto mb-4">
            hydrate
          </h3>
          <div className="flex flex-wrap justify-center">{hydrateBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto mb-4">
            Drip & Trip
          </h3>
          <div className="flex flex-wrap justify-center">{dripTripBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto mb-4">
            Kurvey
          </h3>
          <div className="flex flex-wrap justify-center">{kurveyBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto mb-4">
            glacia
          </h3>
          <div className="flex flex-wrap justify-center">{glaciaBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto mb-4">
            Liquatic
          </h3>
          <div className="flex flex-wrap justify-center">{liquaticBottles}</div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto mb-4">
            kiddo
          </h3>
          <div className="flex flex-wrap justify-center">{kiddoBottles}</div>
        </div>
      </div>
    </div>
  );
}
export default SingleWall;
