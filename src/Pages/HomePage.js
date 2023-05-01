import Home from "../Components/Home/Home";
import Body from "../Components/Home/Body";
import Review from "../Components/Home/Review/Review";

function HomePage() {
  return (
    <div className="">
      <Home />
      <div className="md:mt-10 sm:mt-4">
        <Body />
      </div>
      <div>
        <Review />
      </div>
    </div>
  );
}
export default HomePage;
