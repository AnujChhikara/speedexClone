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
  return <div className="px-10 flex space-x-8">{reviews}</div>;
}
export default Review;
