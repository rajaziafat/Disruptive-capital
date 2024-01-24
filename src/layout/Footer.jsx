import React from "react";

function Footer() {
  return (
    <footer class="container-fluid ts-container-fluid ">
      <div className="d-flex justify-content-between py-5">
        <span>&copy; Disruptive Capital 2023</span>
        <nav class="footer__socials">
          <a
            className=" text-decoration-none"
            href="http://linkedin.com/company/disruptivecapital/"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
