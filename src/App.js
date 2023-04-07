import "./App.css";
import HomePage from "./Pages/HomePage";
import SingleWall from "./Components/SIngleWall/SingleWall";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/single-wall" element={<SingleWall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
