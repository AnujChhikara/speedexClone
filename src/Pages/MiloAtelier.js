import AtelierData from "../Components/AtelierData";
import AtelierCard from "../Components/AtelierCard";
function MiloAtelier() {
  const milo500Data = AtelierData.find((obj) => obj.id === "Milo-500").data;
  const milo500Bottles = milo500Data.map(function (item) {
    return (
      <AtelierCard
        imgId={item.imdId}
        key={item.id}
        id={item.id}
        bottleName="Milo-500"
        quantity={item.capacity}
        name={item.name}
        cutPrice={item.cutPrice}
        price={item.price}
      />
    );
  });
  return (
    <div>
      <div className="flex flex-col sm:pt-28  items-center">
        <h3 className=" uppercase md:text-[92px] sm:text-[40px] font-roboto">
          Atelier
        </h3>
        <div className="flex flex-wrap  justify-center">{milo500Bottles}</div>
      </div>
    </div>
  );
}
export default MiloAtelier;
