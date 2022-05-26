import React from "react";
import { Nav, Navbar, Container, NavDropdown, Image } from "react-bootstrap";

export default function Navibar() {
    return(
<>
  <Navbar className="navibar"
  height="300">
    <Container>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Navbar.Brand href="/">
        <img
          alt=""
          href="/"
          src="https://getcenter.com/sites/all/themes/center/assets/images/logos/Logo-CenterH-Midnight-01.png
          "
          width="120"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
    </Nav>
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
    </Container>
  </Navbar>
</>
)};
