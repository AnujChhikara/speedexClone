import "./App.css";
import HomePage from "./Pages/HomePage";
import SingleWall from "./Pages/SingleWall";
import DoubleWall from "./Pages/DoubleWall";
import CoBrand from "./Pages/CoBrand";
import FeedingBottles from "./Pages/FeedingBottles";
import Career from "./Pages/Career";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/single-wall" element={<SingleWall />} />
        <Route path="/hot-n-cold" element={<DoubleWall />} />
        <Route path="/co-brand" element={<CoBrand />} />
        <Route path="/feeding-bottles" element={<FeedingBottles />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
