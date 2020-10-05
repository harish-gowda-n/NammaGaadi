import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavbarElement() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      sticky="top"
<<<<<<< HEAD
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
=======
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
>>>>>>> 0043c2635bbaf8b2a7826539cc9492064447d222
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
<<<<<<< HEAD
        <Nav>
          <Nav.Link href="/#aboutUs" style={{ color: "#207561", marginRight: "40px" }}>About Us</Nav.Link>
          <Nav.Link href="/#contactUs" style={{ marginRight: "40px", color: "#207561" }}>
            Contact us
          </Nav.Link>
          <Nav.Link href="/#bookNow" style={{ color: "#207561" }}>Book now</Nav.Link>
=======
        <Nav style={{ color: "#207561" }}>
          <Nav.Link href="#login">About Us</Nav.Link>
          <Nav.Link
            href="#login"
            style={{ marginRight: "40px", marginLeft: "40px" }}
          >
            Contact us
          </Nav.Link>
          <Nav.Link href="#login">Book now</Nav.Link>
>>>>>>> 0043c2635bbaf8b2a7826539cc9492064447d222
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


