import Home from "../Components/Home/Home";
import Body from "../Components/Home/Body";
function HomePage() {
  return (
    <div>
      <Home />
      <div className="mt-10">
        <Body />
      </div>
    </div>
  );
}
export default HomePage;
