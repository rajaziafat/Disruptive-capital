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
