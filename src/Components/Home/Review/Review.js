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
    <div className="flex flex-col items-center justify-center md:px-10 sm:px-1 sm:mt-12">
      <h4 className=" font-semibold text-transparent md:text-5xl sm:text-[32px] bg-clip-text md:mb-10 sm:mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        What Our Customers Say
      </h4>
      <div className="text-sm md:flex md:flex-row sm:flex sm:flex-col justify-center md:space-y-0 sm:space-y-2 sm:px-4 md:px-0 md:space-x-8 sm:space-x-0">
        {reviews}
      </div>
    </div>
  );
}
export default Review;
