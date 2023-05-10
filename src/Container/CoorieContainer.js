import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MissionStatement from "../Components/MissionStatement";
import Youtube from "../Components/Youtube";
import Screenprints from "../Components/Screenprints";
import NavBar from "../Components/NavBar";
import Home from "../Components/Home";

const CoorieContainer = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission-statement" element={<MissionStatement />} />
        <Route path="/screenprints" element={<Screenprints />} />
        <Route path="/youtube" element={<Youtube />} />
      </Routes>
    </Router>
  );
};

export default CoorieContainer;
