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

      <div className="mobile-table">
        {investmentsData.map((inv, index) => (
          <div key={index} className="mobile-table-card">
            <div>
              <span className="mobile-table-heading">Name</span>
              <div className="mobile-table-name-section">
                <img src={inv.img} alt="" />

                <div className="mobile-table-name-content">
                  <span>{inv.name}</span>
                  <span>{inv.location}</span>
                </div>
              </div>
            </div>

            <div className="mobile-table-section">
              <span className="mobile-table-heading">Acq Date</span>
              <span className="mobile-table-value">{inv.acqDate}</span>
            </div>

            <div className="mobile-table-section">
              <span className="mobile-table-heading">Asset Class</span>
              <span className="mobile-table-value">{inv.assetClass}</span>
            </div>

            <div className="mobile-table-section">
              <span className="mobile-table-heading">Equity</span>
              <span className="mobile-table-value">{inv.purchasePrice}</span>
            </div>

            <div className="mobile-table-section">
              <span className="mobile-table-heading">Risk Profile</span>
              <span className="mobile-table-value">{inv.riskProfile}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivelyManagedInvestments;
