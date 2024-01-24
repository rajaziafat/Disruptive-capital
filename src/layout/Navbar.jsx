"use client";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function TsNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100; // You can adjust this threshold as needed

      // Check if the scroll position passes the threshold to toggle the class
      setIsScrolled(scrollY > scrollThreshold);
    };

    // Add the event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`ts-navbar fixed-top ${
        isScrolled ? "ts-navbar--scrolled" : ""
      } ${isNavbarActive ? "ts-navbar--active" : ""}`}
    >
      <Container>
        <Navbar.Brand className="fw-bold" href="#">
          {/* JACQUESBRIMA */}
          <img width="140" src="/images/logo.svg" alt="Depop Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2 pt-4 pt-lg-0">
            <Nav.Link
              className="text-uppercase"
              href="https://portal.dsrptvcapital.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              INVESTOR PORTAL
            </Nav.Link>
            <Nav.Link
              href="https://docs.google.com/document/d/1fWz_hNThWcunXWZ8pCIYhf9dVT-CuU5VMcNl14qMqag/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              BUYING CRITERIA
            </Nav.Link>
            <Nav.Link href="#ventures">PROJECTS </Nav.Link>
            <Nav.Link href="#approach">APPROACH</Nav.Link>
            {/* <Nav.Link href="#team">TEAM</Nav.Link> */}
            <Nav.Link href="#contactUs">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TsNavbar;
