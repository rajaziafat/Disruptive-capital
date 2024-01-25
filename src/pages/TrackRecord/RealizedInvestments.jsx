import React from "react";

const cards = [
  {
    image: "/images/card-1.jpg",
    title: "Richfield Apartments",
    tags: ["Flint MI", "Multifamily", "Value Add"],
    realizedNetIrr: "116%",
    holdingPeriod: 2.02,
    purchasePrice: "$1,250,000",
    salePrice: "$2,700,000",
    description:
      "This multifamily complex was purchased in 2016 and sold in 2018",
  },
  {
    image: "/images/card-2.jpg",
    title: "Lapeer Gardens",
    tags: ["Flint MI", "Multifamily", "Value Add"],
    realizedNetIrr: "123%",
    holdingPeriod: 2.01,
    purchasePrice: "$1,300,000",
    salePrice: "$2,900,000",
    description:
      "This multifamily complex was purchased unoccupied in 2016 and sold in 2018 with an 80% occupancy rate",
  },
  {
    image: "/images/card-3.jpg",
    title: "Magnuson Hotel",
    tags: ["Windsor Locks CT", "Hotel", "Opportunistic"],
    realizedNetIrr: "49%",
    holdingPeriod: 0.75,
    purchasePrice: "$1,750,000",
    salePrice: "$2,600,000",
    description:
      "This hotel was purchased in January 2019 mismanaged and with a negative cash flow, and it was sold in September 2019",
  },
  {
    image: "/images/card-4.jpg",
    title: "Gold Rush",
    tags: ["Jacksonville FL", "Hotel", "Core"],
    realizedNetIrr: "19%",
    holdingPeriod: 1.82,
    purchasePrice: "$2,200,000",
    salePrice: "$3,100,000",
    description: "Purchased in April 2019 and sold in February 2021",
  },
  {
    image: "/images/card-5.jpg",
    title: "Econo Lodge",
    tags: ["St Augustine FL", "Hotel", "Value Add"],
    realizedNetIrr: "13%",
    holdingPeriod: 1.33,
    purchasePrice: "$4,200,000",
    salePrice: "$5,350,000",
    description:
      "This hotel was purchased mismanaged in November 2020 and was rehabilitated and sold in March 2022",
  },
  {
    image: "/images/card-6.jpg",
    title: "Extended Stay Jacksonville",
    tags: ["Jacksonville FL", "Hotel", "Value Add"],
    realizedNetIrr: "146%",
    holdingPeriod: 0.75,
    purchasePrice: "$3,000,000",
    salePrice: "$7,388,800",
    description:
      "This hotel was purchased vacant in June 2020 and sold in March 2021",
  },
  {
    image: "/images/card-7.jpg",
    title: "Best Stay America",
    tags: ["Jacksonville FL", "Hotel", "Value Add"],
    realizedNetIrr: "27%",
    holdingPeriod: 2.58,
    purchasePrice: "$3,250,000",
    salePrice: "$5,250,000",
    description:
      "This hotel was purchased in March 2020 and sold in October 2022",
  },
  {
    image: "/images/card-8.jpg",
    title: "Zen Living Suites",
    tags: ["Jacksonville FL", "Hotel", "Value Add"],
    realizedNetIrr: "41%",
    holdingPeriod: 1.33,
    purchasePrice: "$4,000,000",
    salePrice: "$5,620,000",
    description:
      "This hotel was purchased in March 2020 and sold in October 2022",
  },
  {
    image: "/images/card-9.png",
    title: "Value Lodge Busch Gardens",
    tags: ["Tampa, FL", "Hotel", "Value Add"],
    realizedNetIrr: "34%",
    holdingPeriod: 0.73,
    purchasePrice: "$5,500,000",
    salePrice: "$7,350,000",
    description:
      "This 150-room hotel was purchased in June 2020 and sold in March 2021",
  },
  {
    image: "/images/card-10.png",
    title: "Diamond Inn",
    tags: ["Jacksonville, FL", "Hotel", "Value Add"],
    realizedNetIrr: "55%",
    holdingPeriod: 2.97,
    purchasePrice: "$1,200,000",
    salePrice: "$4,500,000",
    description:
      "This 168-unit property was acquired in January 2016 and sold in January 2019",
  },
  {
    image: "/images/card-11.png",
    title: "Extended Stay Memphis",
    tags: ["Memphis, TN", "Hotel", "Value Add"],
    realizedNetIrr: "34%",
    holdingPeriod: 1.62,
    purchasePrice: "$1,200,000",
    salePrice: "$3,500,000",
    description:
      "This 158-unit property was acquired in July 2020 and sold in February 2022",
  },
  {
    image: "/images/card-12.png",
    title: "Quality Inn",
    tags: ["Jacksonville, FL", "Hotel", "Value Add"],
    realizedNetIrr: "33%",
    holdingPeriod: 0.41,
    purchasePrice: "$5,250,000",
    salePrice: "$7,000,000",
    description:
      "This 118-unit property was acquired in January 2022 and sold in May 2022",
  },
];

const RealizedInvestments = () => {
  return (
    <div className="investments wrapper">
      <h2 className="track-section-heading">Fully Realized Investments</h2>

      <div className="investments-cards">
        {cards.map((card, index) => (
          <div key={index} className="investments-card">
            <div className="card-header">
              <img src={card.image} alt={card.title} />

              <div className="card-header-content">
                <h6>{card.title}</h6>

                <ul>
                  {card.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card-stats">
              <div className="card-stats-stat">
                <span>Realized Net IRR</span>
                <span>{card.realizedNetIrr}</span>
              </div>
              <div className="card-stats-stat">
                <span>Holding Period</span>
                <span>{card.holdingPeriod}</span>
              </div>
              <div className="card-stats-stat">
                <span>Purchase Price</span>
                <span>{card.purchasePrice}</span>
              </div>
              <div className="card-stats-stat">
                <span>Sale Price</span>
                <span>{card.salePrice}</span>
              </div>
            </div>

            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealizedInvestments;
