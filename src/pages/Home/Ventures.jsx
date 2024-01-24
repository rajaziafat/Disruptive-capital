/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Ventures() {
  const venturesList = [
    "Atlanta, GA",
    "Birmingham, AL",
    "Baltimore, MD",
    "De Moines, IA",
    "Jupiter, FL",
    "Forth Worth, TX",
    "Fort Lauderdale, FL",
    "Long Island, NY",
    "Miami, FL",
    "Miami Beach, FL",
    "Memphis,TN",
    "Orlando, FL",
    "Palm Bay, FL",
    "West Memphis, AK",
    "Tucson, AZ",
  ];
  return (
    <section className="text-center" id="ventures">
      <div className="container-fluid ts-container-fluid">
        <h1 className="ts-fs-1 mb-11 ">Projects</h1>
        <div className="row row-cols-2 row-cols-sm-4 mt-5 mb-10 mb-lg-12 ">
          <div>
            <h5 className="ts-fs-3 fw-normal">218</h5>
            <p> Single Family</p>
          </div>
          <div>
            <h5 className="ts-fs-3 fw-normal">7 </h5>
            <p>Multifamily</p>
          </div>
          <div>
            <h5 className="ts-fs-3 fw-normal">1 </h5>
            <p>Hospitality</p>
          </div>
          <div>
            <h5 className="ts-fs-3 fw-normal">2 </h5>
            <p>Industrial</p>
          </div>
        </div>

        <div className="ventures__logos">
          {venturesList.map((venture, index) => {
            return (
              <a class="ventures__logo " href="#" key={index}>
                <h1 className="ts-venture__title">{venture}</h1>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Ventures;
