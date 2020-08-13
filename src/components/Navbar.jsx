import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavbarElement() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      sticky="top"
      style={{ backgroundColor: "#d0ef84", position: "fixed", top: "0", width: "100%" }}>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://picsum.photos/200"
          width="30px"
          height="30px"
          className="d-inline-block align-top"
        />
        <span style={{ color: "#207561", marginLeft: "20px" }}>Namma Gaadi</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav style={{ color: "#207561" }}>
          <Nav.Link href="#login">About Us</Nav.Link>
          <Nav.Link
            href="#login"
            style={{ marginRight: "40px", marginLeft: "40px" }}
          >
            Contact us
          </Nav.Link>
          <Nav.Link href="#login">Book now</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


