import React from "react";

function InvestApproach() {
  return (
    <section className="text-center" id="approach">
      <div className="container-fluid ts-container-fluid">
        <h1 className="ts-fs-1 mb-07 mb-lg-13">INVESTMENT APPROACH</h1>

        <div class="approach__pillars">
          <div class="approach-pillar">
            <div class="approach-pillar__icon">
              <img
                src="/images/invest-approach/early-stage.svg"
                alt="Icon of three arrows pointing up"
              />
            </div>
            <h2 class="approach-pillar__title title--regular">Data Driven
</h2>
            <p class="approach-pillar__description paragraph">
            We focus on acquisitions based on our data driven system which identifies and maximizes value in the real estate market. We place a strong emphasis on creativity, risk mitigation and a disciplined capital allocation.

            </p>
          </div>
          <div class="approach-pillar">
            <div class="approach-pillar__icon">
              <img
                src="/images/invest-approach/consumer.svg"
                alt="Icon of a target with a dart in the center"
              />
            </div>
            <h2 class="approach-pillar__title title--regular">
           Detail oriented

            </h2>
            <p class="approach-pillar__description paragraph">
            Our strength is a vertical approach with a team that facilitates the acquisition process, disposition, asset and property management.

            </p>
          </div>
          <div class="approach-pillar">
            <div class="approach-pillar__icon">
              <img
                src="/images/invest-approach/permanent-capital.svg"
                alt="Icon of three arrows pointing up"
              />
            </div>
            <h2 class="approach-pillar__title title--regular">
            The Company

            </h2>
            <p class="approach-pillar__description paragraph">
            Embedded in the company's DNA is an entrepreneurial mindset and the ability to source new opportunities.


            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvestApproach;
