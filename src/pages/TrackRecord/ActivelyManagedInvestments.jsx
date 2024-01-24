import React from "react";

const investmentsData = [
  {
    img: "/images/table-1.jpeg",
    name: "La Quinta North Miami",
    location: "Miami, FL",
    acqDate: "Aug 2022",
    assetClass: "Hotel",
    purchasePrice: "$15,500,000",
    riskProfile: "Core",
  },
  {
    img: "/images/table-1.jpeg",
    name: "La Quinta East Miami",
    location: "Miami, FL",
    acqDate: "Aug 2022",
    assetClass: "Hotel",
    purchasePrice: "$15,500,000",
    riskProfile: "Core",
  },
  {
    img: "/images/table-1.jpeg",
    name: "La Quinta West Palm Beach",
    location: "West Palm Beach, FL",
    acqDate: "Aug 2022",
    assetClass: "Hotel",
    purchasePrice: "$15,500,000",
    riskProfile: "Core",
  },
  {
    img: "/images/table-1.jpeg",
    name: "Rore Retail",
    location: "Miami, FL",
    acqDate: "Aug 2022",
    assetClass: "Hotel",
    purchasePrice: "$15,500,000",
    riskProfile: "Core",
  },
  {
    img: "/images/table-1.jpeg",
    name: "La Quinta North Miami",
    location: "Miami, FL",
    acqDate: "Aug 2022",
    assetClass: "Hotel",
    purchasePrice: "$15,500,000",
    riskProfile: "Core",
  },
  {
    img: "/images/table-1.jpeg",
    name: "La Quinta North Miami",
    location: "Miami, FL",
    acqDate: "Aug 2022",
    assetClass: "Hotel",
    purchasePrice: "$15,500,000",
    riskProfile: "Core",
  },
  {
    img: "/images/table-1.jpeg",
    name: "La Quinta North Miami",
    location: "Miami, FL",
    acqDate: "Aug 2022",
    assetClass: "Hotel",
    purchasePrice: "$15,500,000",
    riskProfile: "Core",
  },
  {
    img: "/images/table-1.jpeg",
    name: "La Quinta North Miami",
    location: "Miami, FL",
    acqDate: "Aug 2022",
    assetClass: "Hotel",
    purchasePrice: "$15,500,000",
    riskProfile: "Core",
  },
  {
    img: "/images/table-1.jpeg",
    name: "La Quinta North Miami",
    location: "Miami, FL",
    acqDate: "Aug 2022",
    assetClass: "Hotel",
    purchasePrice: "$15,500,000",
    riskProfile: "Core",
  },
  {
    img: "/images/table-1.jpeg",
    name: "La Quinta North Miami",
    location: "Miami, FL",
    acqDate: "Aug 2022",
    assetClass: "Hotel",
    purchasePrice: "$15,500,000",
    riskProfile: "Core",
  },
  {
    img: "/images/table-1.jpeg",
    name: "La Quinta North Miami",
    location: "Miami, FL",
    acqDate: "Aug 2022",
    assetClass: "Hotel",
    purchasePrice: "$15,500,000",
    riskProfile: "Core",
  },
  {
    img: "/images/table-1.jpeg",
    name: "La Quinta North Miami",
    location: "Miami, FL",
    acqDate: "Aug 2022",
    assetClass: "Hotel",
    purchasePrice: "$15,500,000",
    riskProfile: "Core",
  },
];

const ActivelyManagedInvestments = () => {
  return (
    <div className="managed-investments wrapper">
      <h2 className="track-section-heading">Actively Managed Investments</h2>

      <table>
        <thead>
          <tr>
            <td>NAME</td>
            <td>ACQ DATE</td>
            <td>ASSET CLASS</td>
            <td>PURCHASE PRICE</td>
            <td>RISK PROFILE</td>
          </tr>
        </thead>
        <tbody>
          {investmentsData.map((inv, index) => (
            <tr key={index}>
              <td className="row-data-name">
                <div>
                  <img src={inv.img} alt={inv.name} />

                  <div className="row-data-name-content-wrapper">
                    <span>{inv.name}</span>
                    <span>{inv.location}</span>
                  </div>
                </div>
              </td>
              <td>{inv.acqDate}</td>
              <td>{inv.assetClass}</td>
              <td>{inv.purchasePrice}</td>
              <td>{inv.riskProfile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivelyManagedInvestments;
