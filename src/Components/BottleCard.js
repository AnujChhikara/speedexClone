function BottleCard(props) {
  return (
    <div className="w-[350px] flex flex-col items-center space-y-3">
      <img src={props.imgUrl} alt="" />
      <h5 className="font-medium">
        {props.bottleName} {props.name}
      </h5>
      <div className="flex space-x-2 text-lg font-medium">
        <h6 className="line-through text-gray-400">₹{props.cutPrice}.00</h6>
        <h6>₹{props.price}.00</h6>
      </div>
    </div>
  );
}
export default BottleCard;
