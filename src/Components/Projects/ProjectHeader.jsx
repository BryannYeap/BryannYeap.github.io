import React from "react";
import Container from "react-bootstrap/Container";

function ProjectHeader() {
  return (
    <Container>
      <h5 className="mt-3 font-montserrat theme-white text-center">
        {" "}
        <strong>CHECK OUT MY PROJECTS</strong>{" "}
      </h5>
      <span className="gradient-underline"></span>
    </Container>
  );
}

export default ProjectHeader;
