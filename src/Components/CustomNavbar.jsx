import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function CustomNavbar() {
  return (
    <div>
      <Navbar variant="dark" expand="lg" className="shadow p-3 ">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="collapsable-navbar" />
          <Navbar.Collapse id="collapsable-navbar">
            <Nav className="ms-auto">
              <Nav.Link className="px-4" href="/about-me">
                About Me
              </Nav.Link>
              <Nav.Link className="px-4" href="/projects">
                Projects
              </Nav.Link>
              <Nav.Link className="px-4" href="/experience">
                Experience
              </Nav.Link>
              <Nav.Link className="px-4" href="/contact-me">
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
