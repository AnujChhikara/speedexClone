import "./App.css";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import SingleWall from "./Pages/BottlesPage/SingleWall";
import DoubleWall from "./Pages/BottlesPage/DoubleWall";
import CoBrand from "./Pages/UtilsPage/CoBrand";
import ViewBottleCard from "./Pages/ViewPages/ViewBottleCard";
import FeedingBottles from "./Pages/BottlesPage/FeedingBottles";
import Career from "./Pages/UtilsPage/Career";
import PrivacyPolicy from "./Pages/UtilsPage/PrivacyPolicy";
import Refund from "./Pages/UtilsPage/Refund";
import CompanyProfile from "./Pages/UtilsPage/CompanyProfile";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import MiloAtelier from "./Pages/BottlesPage/MiloAtelier";
import AtelirerViewCard from "./Pages/ViewPages/AtelirerViewCard";
import Cart from "./Pages/Cart";
import ScrollToTop from './Components/Common/ScrollToTop'
import Checkout from "./Pages/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import RegisterUser from "./Pages/user/registerUser";
import LoginUser from "./Pages/user/login";
import Profile from "./Pages/UtilsPage/userProfile";



function App() {
  
  const cartItems =  useSelector((state) => state.cart.items)
  const user =  useSelector((state) => state.user)
  let userLoggedIn = false
  if(user){
    userLoggedIn= true
  }
  let isSecure = false
  if(cartItems.length > 0) {
    isSecure = true
  }
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
        {/* user Routes */}
        <Route path="/register" element={<RegisterUser/>} />
        <Route path="/login" element={<LoginUser/>} />
        <Route path="/profile" element={userLoggedIn ? (
          <Profile/>
        ) : (
          <LoginUser/>
        )}/>
        

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
        <Route path="/checkout" element={isSecure? <Checkout /> : <PageNotFound/>} />

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
