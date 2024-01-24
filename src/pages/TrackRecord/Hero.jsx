import React from "react";

const statsData = [
  {
    title: "Total Asset Value",
    value: "$320m+",
    tooltip:
      "Total market value of all assets we're currently managing and sale prices.",
  },
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
            <div className="hero-stat-title">
              <span>{stat.title}</span>
              {stat.tooltip && (
                <div className="tooltip-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="gray"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>

                  <div className="tooltip-content">{stat.tooltip}</div>
                </div>
              )}
            </div>
            <span className="hero-stat-value">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
