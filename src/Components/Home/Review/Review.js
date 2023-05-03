import ReviewCard from "./ReviewCard";
import ReviewData from "./ReviewData";
import FlickityComponent from "react-flickity-component";
import "flickity/css/flickity.css";

function Review() {
  const flickityOptions = {
    initialIndex: 0,
    cellAlign: "left",
    wrapAround: true,
    autoPlay: true,
    pauseAutoPlayOnHover: false,
  };
  const slides = [
    <div className="carousel-cell">Slide 1</div>,
    <div className="carousel-cell">Slide 2</div>,
    <div className="carousel-cell">Slide 3</div>,
  ];
  const reviews = ReviewData.map(function (review) {
    return (
      <ReviewCard
        key={review.id}
        stars={review.stars}
        text={review.text}
        quality={review.quality}
      />
    );
  });
  return (
    <div className="flex flex-col items-center justify-center md:px-10 sm:px-1 sm:mt-12">
      <h4 className=" font-semibold text-transparent md:text-5xl sm:text-[30px] bg-clip-text md:mb-10 sm:mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        What Our Customers Say
      </h4>
      <div className="text-sm  sm:px-4 md:px-0 md:space-x-8 sm:space-x-0">
        {reviews}
        {/* <FlickityComponent
          className="carousel"
          elementType="div"
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
        >
          {reviews}
        </FlickityComponent> */}
      </div>
    </div>
  );
}
export default Review;
