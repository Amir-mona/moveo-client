import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";

import FirstRoom from "./components/pages/FirstRoom";

import SecondRoom from "./components/pages/SecondRoom";

import ThirdRoom from "./components/pages/ThirdRoom";

import FourRoom from "./components/pages/FourRoom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FirstRoom" element={<FirstRoom />} />
          <Route path="/SecondRoom" element={<SecondRoom />} />
          <Route path="/thirdRoom" element={<ThirdRoom />} />
          <Route path="/fourRoom" element={<FourRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
