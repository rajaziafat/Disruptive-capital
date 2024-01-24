import React from "react";
import Hero from "./Hero";
import Investments from "./Investments";
import "./index.scss";

const TrackRecord = () => {
  return (
    <div className="track">
      <Hero />
      <Investments />
    </div>
  );
};

export default TrackRecord;
