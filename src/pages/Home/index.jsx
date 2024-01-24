import React from "react";
import GetInTouch from "./GetInTouch";
import Team from "./Team";
import InvestApproach from "./InvestApproach";
import Ventures from "./Ventures";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Ventures />
      <InvestApproach />
      {/* <Team /> */}
      <GetInTouch />
    </>
  );
};

export default Home;
