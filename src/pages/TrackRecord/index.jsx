import React from "react";
import Hero from "./Hero";
import RealizedInvestments from "./RealizedInvestments";
import ActivelyManagedInvestments from "./ActivelyManagedInvestments";
import "./index.scss";

const TrackRecord = () => {
  return (
    <div className="track">
      <Hero />
      <RealizedInvestments />
      <ActivelyManagedInvestments />
    </div>
  );
};

export default TrackRecord;
