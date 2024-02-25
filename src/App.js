import "./App.css";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import SingleWall from "./Pages/SingleWall";
import DoubleWall from "./Pages/DoubleWall";
import CoBrand from "./Pages/CoBrand";
import ViewBottleCard from "./Pages/ViewBottleCard";
import FeedingBottles from "./Pages/FeedingBottles";
import Career from "./Pages/Career";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Refund from "./Pages/Refund";
import CompanyProfile from "./Pages/CompanyProfile";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import MiloAtelier from "./Pages/MiloAtelier";
import AtelirerViewCard from "./Pages/AtelirerViewCard";
import Cart from "./Pages/Cart";
import ScrollToTop from './Components/Common/ScrollToTop'
// import Checkout from "./Pages/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/single-wall" element={<SingleWall />} />
        <Route path="/hot-n-cold" element={<DoubleWall />} />
        <Route path="/co-brand" element={<CoBrand />} />
        <Route path="/feeding-bottles" element={<FeedingBottles />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-cancellation-policy" element={<Refund />} />
        <Route path="/about" element={<CompanyProfile />} />
        <Route path="/Atelier" element={<MiloAtelier />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}

        <Route
          path="/product/:bottleName/:productId"
          element={<ViewBottleCard />}
        />
        <Route
          path="/product/Atelier/:bottleName/:productId"
          element={<AtelirerViewCard />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
