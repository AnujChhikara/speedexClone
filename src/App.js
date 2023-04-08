import "./App.css";
import HomePage from "./Pages/HomePage";
import SingleWall from "./Components/SIngleWall/SingleWall";
import DoubleWall from "./Components/DoubleWall/DoubleWall";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/single-wall" element={<SingleWall />} />
        <Route path="/hot-n-cold" element={<DoubleWall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
