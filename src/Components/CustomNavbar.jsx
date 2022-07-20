import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function CustomNavbar() {
  return (
    <>
      <Navbar bg="grey" expand="lg">
        <Container>
          <Navbar.Brand href="/home">Bryann Yeap</Navbar.Brand>
          <Navbar.Toggle aria-controls="collapsable-navbar" />
          <Navbar.Collapse id="collapsable-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="/about-me">About Me</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/experience">Experience</Nav.Link>
              <Nav.Link href="/contact-me">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
