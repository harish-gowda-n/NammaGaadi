import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavbarElement() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      sticky="top"
      //D1EAA3
      style={{ backgroundColor: "#A0CC78", width: "100%", alignItems: "center" }}>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="./Logo.png"
          width="auto"
          height="35px"
          className="d-inline-block align-top"
        />
        <span style={{ color: "#207561", margin: "auto 0 auto 20px" }}>Namma Gaadi</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link href="/#aboutUs" style={{ color: "#207561", marginRight: "40px" }}>About Us</Nav.Link>
          <Nav.Link href="/#contactUs" style={{ marginRight: "40px", color: "#207561" }}>
            Contact us
          </Nav.Link>
          <Nav.Link href="/#bookNow" style={{ color: "#207561" }}>Book now</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


