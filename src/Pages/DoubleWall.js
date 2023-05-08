import BottleCard from "../Components/BottleCard";
import AllBottleData from "../Components/AllBottlesData";

function DoubleWall() {
  const miloData = AllBottleData.find((obj) => obj.id === "Milo").data;

  const miloBottles = miloData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="Milo"
        id={item.id}
        key={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const checkMateData = AllBottleData.find(
    (obj) => obj.id === "Check & Mate"
  ).data;

  const checkMateBottles = checkMateData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="Check & Mate"
        id={item.id}
        key={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const eliteGoldData = AllBottleData.find(
    (obj) => obj.id === "EliteGold"
  ).data;

  const eliteGoldBottles = eliteGoldData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="EliteGold"
        id={item.id}
        key={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const nightingleData = AllBottleData.find(
    (obj) => obj.id === "Nightingale"
  ).data;

  const nightingleBottles = nightingleData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="Nightingale"
        id={item.id}
        key={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const flasqData = AllBottleData.find((obj) => obj.id === "Flasq").data;

  const flasqBottles = flasqData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="Flasq"
        id={item.id}
        key={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const checkOverData = AllBottleData.find(
    (obj) => obj.id === "Checkover"
  ).data;

  const checkOverBottles = checkOverData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="Checkover"
        id={item.id}
        key={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const royalGoldData = AllBottleData.find(
    (obj) => obj.id === "RoyalGold"
  ).data;

  const royalGoldBottles = royalGoldData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="RoyalGold"
        id={item.id}
        key={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const imperioData = AllBottleData.find((obj) => obj.id === "Imperio").data;

  const imperioBottles = imperioData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="Imperio"
        id={item.id}
        key={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const sharkData = AllBottleData.find((obj) => obj.id === "Shark").data;

  const sharkBottles = sharkData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="Shark"
        id={item.id}
        key={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
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
            Nightingale
          </h3>
          <div className="flex flex-wrap justify-center">
            {nightingleBottles}
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
