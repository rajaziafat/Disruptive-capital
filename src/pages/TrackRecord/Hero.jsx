import React from "react";

const statsData = [
  { title: "Total Asset Value", value: "$320m+" },
  { title: "Historical Equity Multiple", value: "1.91" },
  { title: "Historical IRR", value: "30%" },
];

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-heading">Rore Track Record</h1>

      <div className="hero-stats">
        {statsData.map((stat, index) => (
          <div className="hero-stat" key={index}>
            <span className="hero-stat-title">{stat.title}</span>
            <span className="hero-stat-value">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
