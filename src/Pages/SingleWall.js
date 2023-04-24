import BottleCard from "../Components/BottleCard";
import singleWallData from "../Components/SIngleWall/SingleWallData";

function SingleWall() {
  const simplexData = singleWallData.find((obj) => obj.id === "Simplex").data;
  const simplexBottles = simplexData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        id={item.id}
        bottleName="Simplex"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const hydrateData = singleWallData.find((obj) => obj.id === "Hydrate").data;
  const hydrateBottles = hydrateData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        id={item.id}
        bottleName="Hydrate"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const dripTripData = singleWallData.find(
    (obj) => obj.id === "Drip Trip"
  ).data;
  const dripTripBottles = dripTripData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        id={item.id}
        bottleName="Drip Trip"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const kurveyData = singleWallData.find((obj) => obj.id === "Kurvey").data;
  const kurveyBottles = kurveyData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        id={item.id}
        bottleName="Kurvey"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const glaciaData = singleWallData.find((obj) => obj.id === "Glacia").data;
  const glaciaBottles = glaciaData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        id={item.id}
        bottleName="Glacia"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const liquaticData = singleWallData.find((obj) => obj.id === "Liquatic").data;
  const liquaticBottles = liquaticData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        id={item.id}
        bottleName="Liquatic"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const kiddoData = singleWallData.find((obj) => obj.id === "Kiddo").data;
  const kiddoBottles = kiddoData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        id={item.id}
        bottleName="Kiddo"
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-32">
        <h2 className="text-[100px] text-gray-500 font-roboto">SINGLE WALL</h2>
        <p className="text-gray-600 w-[650px]">
          Your Hydration partner-The original Single-walled Stainless Steel
          Bottle. The highest grade that lasts a lifetime & never rusts and has
          completely matched leak-proof properties. Can store carbonated
          beverages - Preserves flavor and freshness. Appropriate for all indoor
          and outdoor uses.
        </p>
      </div>

      <div className="flex flex-col space-y-20">
        <div className="flex flex-col items-center">
          <h3 className=" uppercase text-[92px] font-roboto">simplex</h3>
          <div className="flex flex-wrap  justify-center">{simplexBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase text-[92px] font-roboto mb-4">hydrate</h3>
          <div className="flex flex-wrap justify-center">{hydrateBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase text-[92px] font-roboto mb-4">
            Drip & Trip
          </h3>
          <div className="flex flex-wrap justify-center">{dripTripBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase text-[92px] font-roboto mb-4">Kurvey</h3>
          <div className="flex flex-wrap justify-center">{kurveyBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase text-[92px] font-roboto mb-4">glacia</h3>
          <div className="flex flex-wrap justify-center">{glaciaBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase text-[92px] font-roboto mb-4">Liquatic</h3>
          <div className="flex flex-wrap justify-center">{liquaticBottles}</div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className=" uppercase text-[92px] font-roboto mb-4">kiddo</h3>
          <div className="flex flex-wrap justify-center">{kiddoBottles}</div>
        </div>
      </div>
    </div>
  );
}
export default SingleWall;
