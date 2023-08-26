import "./App.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import { Routes, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

function App() {
  return (
    <div className="app">
      <div className="w-full bg-[#1c1c1c]">
        <Wrapper>
          <Navbar />
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
