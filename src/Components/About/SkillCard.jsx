import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import SkillIcons from "./SkillIcons";

function SkillCard({ icon, title, iconObjectArray }) {
  return (
    <Card
      style={{ "border-radius": "15px" }}
      className="my-2 shadow theme-dark-purple font-montserrat"
    >
      <h1 className="mt-3">{icon}</h1>
      <Badge bg="dark" className="pt-3 my-2">
        <h6>
          <strong>{title}</strong>
        </h6>
      </Badge>
      <SkillIcons iconObjectArray={iconObjectArray} />
    </Card>
  );
}

export default SkillCard;
