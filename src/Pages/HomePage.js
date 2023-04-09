import Home from "../Components/Home/Home";
import Body from "../Components/Home/Body";
import Review from "../Components/Home/Review/Review";

function HomePage() {
  return (
    <div>
      <Home />
      <div className="mt-10">
        <Body />
      </div>
      <div>
        <Review />
      </div>
    </div>
  );
}
export default HomePage;
