import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";

function ProjectBody({ projectObjectArray }) {
  return (
    <Container className="">
      <Row>
        {projectObjectArray.map((projectObject) => {
          return (
            <Col key={projectObject.title} lg={6} className="mt-4">
              <ProjectCard
                title={projectObject.title}
                demoVideo={projectObject.demoVideo}
                image={projectObject.image}
                text={projectObject.text}
                projectLink={projectObject.projectLink}
                githubLink={projectObject.githubLink}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ProjectBody;
