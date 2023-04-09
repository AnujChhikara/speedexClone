import Navbar from "../Common/Navbar";
function Home() {
  return (
    <div className="bg ">
      <Navbar />
      <div className="flex">
        <div className="flex justify-center w-44 align -rotate-60">
          <img className="h-[440px]" src="/Images/b.webp" alt="" />
        </div>
        <div className="w-[600px] text-5xl font-medium flex ml-40 items-start relative mt-40">
          <h1>
            Join the Reusable Revolution with Speedex's Eco-Friendly Water
            Bottles.
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Home;
