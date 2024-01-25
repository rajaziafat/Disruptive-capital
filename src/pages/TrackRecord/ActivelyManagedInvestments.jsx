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
    img: "/images/table-2.jpeg",
    name: "La Quinta East Miami",
    location: "Miami, FL",
    acqDate: "Aug 2022",
    assetClass: "Hotel",
    purchasePrice: "$22,550,000",
    riskProfile: "Core",
  },
  {
    img: "/images/table-3.png",
    name: "La Quinta West Palm Beach",
    location: "West Palm Beach, FL",
    acqDate: "Nov 2022",
    assetClass: "Hotel",
    purchasePrice: "$12,950,000",
    riskProfile: "Core",
  },
  {
    img: "/images/table-4.jpeg",
    name: "La Quinta Plantation FL",
    location: "Plantation, FL",
    acqDate: "Nov 2022",
    assetClass: "Hotel",
    purchasePrice: "$14,875,000",
    riskProfile: "Core",
  },
  {
    img: "/images/table-5.jpg",
    name: "Rore Retail",
    location: "Tallahassee FL",
    acqDate: "Sep 2022",
    assetClass: "Retail",
    purchasePrice: "$2,550,000",
    riskProfile: "Core",
  },
  {
    img: "/images/table-6.jpeg",
    name: "La Quinta Coral Springs",
    location: "Coral Springs, FL",
    acqDate: "Jun 2022",
    assetClass: "Retail",
    purchasePrice: "$5,357,000",
    riskProfile: "Opportunistic",
  },
  {
    img: "/images/table-7.jpg",
    name: "Rore Retail",
    location: "Tallahassee FL",
    acqDate: "Nov 2022",
    assetClass: "Multifamily",
    purchasePrice: "$6,550,000",
    riskProfile: "Opportunistic",
  },
  {
    img: "/images/table-8.jpg",
    name: "Pearl Plaza Shopping Center",
    location: "Jacksonville FL",
    acqDate: "May 2022",
    assetClass: "Hotel",
    purchasePrice: "$10,500,000",
    riskProfile: "Value Add",
  },
  {
    img: "/images/table-9.jpg",
    name: "Riverbend Apartments",
    location: "West Memphis AR",
    acqDate: "Apr 2022",
    assetClass: "Hotel",
    purchasePrice: "$10,100,000",
    riskProfile: "Value Add",
  },
  {
    img: "/images/table-10.png",
    name: "Hotel Elite",
    location: "Altamonte Springs, FL",
    acqDate: "May 2022",
    assetClass: "Hotel",
    purchasePrice: "$10,500,000",
    riskProfile: "Value Add",
  },
  {
    img: "/images/table-11.png",
    name: "Ramada Inn",
    location: "Jacksonville, FL",
    acqDate: "Apr 2022",
    assetClass: "Hotel",
    purchasePrice: "$10,100,000",
    riskProfile: "Value Add",
  },
  {
    img: "/images/table-12.jpeg",
    name: "Homing Inn",
    location: "Boynton Beach, FL",
    acqDate: "Aug 2022",
    assetClass: "Hotel",
    purchasePrice: "$8,800,000",
    riskProfile: "Value Add",
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
