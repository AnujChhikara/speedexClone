function ReviewCard(props) {
  return (
    <div className="w-[220px] flex flex-col items-center">
      <div>{props.stars}</div>
      <div>{props.text}</div>
      {/* <hr className="w-40 border-1 border-black my-1" /> */}
      <h4 className="text-lg mt-5 font-semibold">{props.quality}</h4>
      <h5>Buyer</h5>
    </div>
  );
}
export default ReviewCard;
