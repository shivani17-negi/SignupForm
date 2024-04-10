import React from "react";

import Navbarbootstrap from "./Components/Navbarbootstrap";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pricing from "./Components/Pricing";
import Signup from "./Components/Signup";

export default function App() {
  return (
    <div>
      <Router>
        <Navbarbootstrap />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product" element={<Pricing/>} />
        </Routes>
      </Router>
    </div>
  );
}
