function ReviewCard(props) {
  const stars = typeof props.stars === "string" ? [props.stars] : props.stars;
  const text = typeof props.text === "string" ? [props.text] : props.text;

  return (
    <div className="flex flex-col items-center">
      <div className="mb-1">{stars}</div>
      <div>{text}</div>
      {/* <hr className="w-40 border-1 border-black my-1" /> */}
      <h4 className="text-lg lg:mt-5 sm:mt-0 font-semibold">{props.quality}</h4>
      <h5>Buyer</h5>
      <hr className="w-48 sm:block md:hidden mt-2 bg-black" />
    </div>
  );
}

export default ReviewCard;
