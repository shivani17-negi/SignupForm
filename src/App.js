import React from "react";
import "./App.css";
import Navbarbootstrap from "./Components/Navbarbootstrap";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Navbarbootstrap />
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}
