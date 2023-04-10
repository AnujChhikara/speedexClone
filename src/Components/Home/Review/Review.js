import ReviewCard from "./ReviewCard";
import ReviewData from "./ReviewData";
function Review() {
  const reviews = ReviewData.map(function (review) {
    return (
      <ReviewCard
        stars={review.stars}
        text={review.text}
        quality={review.quality}
      />
    );
  });
  return (
    <div className="flex flex-col items-center px-10  ">
      <h4 className=" font-semibold text-transparent text-5xl bg-clip-text mb-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        What Our Customers Say
      </h4>
      <div className="text-sm flex justify-center space-x-8">{reviews}</div>
    </div>
  );
}
export default Review;
