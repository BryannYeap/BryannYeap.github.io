import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SkillIcons({ iconObjectArray }) {
  return (
    <Container>
      <Row>
        {iconObjectArray.map((iconObject) => {
          return (
            <Col lg={4} className="p-1">
              <h1>{iconObject.icon}</h1>
              <div>{iconObject.name}</div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default SkillIcons;