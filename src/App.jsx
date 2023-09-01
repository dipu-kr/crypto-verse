import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Coins from "./components/Coins";
import Details from "./components/Details";
import Exchange from "./components/Exchange";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="w-full">
        <Navbar />
        <Banner />
        <Routes>
          <Route exact path="/" element={<Coins />} />
          <Route path="/coin/:id" element={<Details />} />
          <Route path="/news" element={<News />} />
          <Route path="/exchange" element={<Exchange />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
