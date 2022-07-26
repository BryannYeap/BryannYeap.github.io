import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaPlayCircle, FaCode } from "react-icons/fa";
import ReactGA from "react-ga";

function ProjectCard({
  title,
  demoVideo,
  image,
  text,
  projectLink,
  githubLink,
}) {
  return (
    <Card
      style={{
        borderRadius: "15px",
        borderWidth: "3px",
        borderColor: "#5349ff",
      }}
      className="theme-bg h-100"
      bg="light"
    >
      <Card.Body>
        <Card.Title className="text-center">
          <h4>
            <strong>{title}</strong>
          </h4>
        </Card.Title>
        {demoVideo == null ? (
          <Card.Img src={image} alt="Project" />
        ) : (
          <iframe
            title={title}
            src={demoVideo}
            width="100%"
            height="300px"
            allowFullScreen
          ></iframe>
        )}
        <Card.Text
          style={{
            fontSize: "large",
          }}
          className="mt-4 font-gill text-md-start text-center"
        >
          {text}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-evenly bg-theme-grey">
        {projectLink.length !== 0 && (
          <Button
            variant="btn btn-theme-purple"
            href={projectLink}
            target="_blank"
            onClick={() => {
              ReactGA.event({
                category: "engagement",
                action: "Click project link",
              });
            }}
          >
            <div>
              <FaPlayCircle size={18} />
            </div>
            <strong className="font-montserrat">Check it out!</strong>
          </Button>
        )}
        {githubLink.length !== 0 && (
          <Button
            variant="btn btn-theme-purple"
            href={githubLink}
            target="_blank"
            onClick={() => {
              ReactGA.event({
                category: "engagement",
                action: "See project code on GitHub",
              });
            }}
          >
            <strong className="font-montserrat">
              <div>
                <FaCode size={18} />
              </div>
              See the code!
            </strong>
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
}

export default ProjectCard;
