import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MissionStatement from "../Components/MissionStatement";
import Youtube from "../Components/Youtube";
import Screenprints from "../Components/Screenprints";
import Home from "../Components/Home";
import Radio from "../Components/Radio";

const CoorieContainer = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission-statement" element={<MissionStatement />} />
        <Route path="/screenprints" element={<Screenprints />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/radio" element={<Radio />} />
      </Routes>
    </Router>
  );
};

export default CoorieContainer;