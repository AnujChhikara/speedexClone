import Home from "../Components/Home/Home";
import Body from "../Components/Home/Body";
import Review from "../Components/Home/Review/Review";
import Footer from "../Components/Common/Footer";
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
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default HomePage;
