import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../Resources/Images/Logo.png";

function CustomNavbar() {
  return (
    <div>
      <Navbar variant="dark" expand="lg" className="shadow p-3">
        <Container>
          <Navbar.Brand href="/">
            <img width={"50px"} src={Logo} alt="Home" className="grow" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="collapsable-navbar" />
          <Navbar.Collapse id="collapsable-navbar">
            <Nav className="ms-auto">
              <Nav.Link className="px-4 grow" href="/#/about-me">
                About Me
              </Nav.Link>
              <Nav.Link className="px-4 grow" href="/#/projects">
                Projects
              </Nav.Link>
              <Nav.Link className="px-4 grow" href="/#/contact-me">
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
