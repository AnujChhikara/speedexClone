import ReviewCard from "./ReviewCard";
import ReviewData from "./ReviewData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
function Review() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

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
    <div>
      {" "}
      {isDesktop ? (
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-1 sm:mt-12">
          <h4 className=" font-semibold  text-transparent md:text-5xl sm:text-[30px] bg-clip-text md:mb-10 sm:mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            What Our Customers Say
          </h4>

          <div className="flex text-sm  sm:px-4 md:px-0 md:space-x-8 sm:space-x-0">
            {reviews}
          </div>
        </div>
      ) : (
        <div className="">
          <h4 className=" font-semibold text-center mt-16 text-transparent md:text-5xl sm:text-[30px] bg-clip-text md:mb-10 sm:mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            What Our Customers Say
          </h4>

          <Slider {...settings}> {reviews}</Slider>
        </div>
      )}
    </div>
  );
}
export default Review;
