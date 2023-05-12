import React from "react";
import Maps from "./Maps";
import LeafLet from "./leafLet";
import CovidData from "./CovidData";
import "./index.css";
const IndexMap = () => {
  return (
    <div className="map-container">
      <CovidData />
      <Maps />
      <LeafLet />
    </div>
  );
};

export default IndexMap;
