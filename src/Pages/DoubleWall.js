import BottleCard from "../Components/BottleCard";
import doubleWallData from "../Components/DoubleWall/DoubleWallData";
import Menu from "../Components/Common/SideBar";
function DoubleWall() {
  const miloData = doubleWallData.find((obj) => obj.id === "Milo").data;
  const miloBottles = miloData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="Milo"
        id={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const checkMateData = doubleWallData.find(
    (obj) => obj.id === "CheckMate"
  ).data;
  const checkMateBottles = checkMateData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="Check & Mate"
        id={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const eliteGoldData = doubleWallData.find(
    (obj) => obj.id === "EliteGold"
  ).data;
  const eliteGoldBottles = eliteGoldData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="Elite Gold"
        id={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const nightingleData = doubleWallData.find(
    (obj) => obj.id === "Nightingale"
  ).data;
  const nightingleBottles = nightingleData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="Nightingale"
        id={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const flasqData = doubleWallData.find((obj) => obj.id === "Flasq").data;
  const flasqBottles = flasqData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="flasq"
        id={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const checkOverData = doubleWallData.find(
    (obj) => obj.id === "Checkover"
  ).data;
  const checkOverBottles = checkOverData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="Checkover"
        id={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  const royalGoldData = doubleWallData.find(
    (obj) => obj.id === "RoyalGold"
  ).data;
  const royalGoldBottles = royalGoldData.map(function (item) {
    return (
      <BottleCard
        imgUrl={item.imgUrl}
        bottleName="Royal Gold"
        id={item.id}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  return (
    <div>
      <Menu />

      <div className="flex flex-col justify-center items-center mb-32">
        <h2 className="text-[100px] text-gray-500 font-roboto">HOT n COLD</h2>
        <p className="text-gray-600 w-[650px]">
          Carry your favorite beverage hot or cold on the go. Enjoy your
          favorite drink anytime, anywhere with Speedex Insulated double wall
          vacuum steel bottles. Find your favorite from the series of our
          durable finish & stylish daily-use steel water bottles.
        </p>
      </div>

      <div className="flex flex-col space-y-20">
        <div className="flex flex-col items-center">
          <h3 className=" uppercase text-[92px] font-roboto">Milo</h3>
          <div className="flex flex-wrap  justify-center">{miloBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase text-[92px] font-roboto mb-4">
            Check & Mate
          </h3>
          <div className="flex flex-wrap justify-center">
            {checkMateBottles}
          </div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase text-[92px] font-roboto mb-4">
            Elite Gold
          </h3>
          <div className="flex flex-wrap justify-center">
            {eliteGoldBottles}
          </div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase text-[92px] font-roboto mb-4">
            Nightingale
          </h3>
          <div className="flex flex-wrap justify-center">
            {nightingleBottles}
          </div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase text-[92px] font-roboto mb-4">flasq</h3>
          <div className="flex flex-wrap justify-center">{flasqBottles}</div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className=" uppercase text-[92px] font-roboto mb-4">checkover</h3>
          <div className="flex flex-wrap justify-center">
            {checkOverBottles}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className=" uppercase text-[92px] font-roboto mb-4">
            Royal Gold
          </h3>
          <div className="flex flex-wrap justify-center">
            {royalGoldBottles}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DoubleWall;
