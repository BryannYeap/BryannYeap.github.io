import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { TbDownload } from "react-icons/tb";
import Programming from "../../Resources/Images/programming.svg";
import Resume from "../../Resources/Documents/RESUME_Bryann.pdf";
import HomeIcons from "./HomeIcons";

function Intro() {
  return (
    <section className="bg-dark text-light p-5 text-center text-sm-start">
      <div className="container pb-5">
        <div className="d-sm-flex justify-content-center align-items-center">
          <div>
            <h1>
              Hey! My name is <span className="theme-purple">Bryann</span>
            </h1>
            <p className="lead mb-3">
              I am an aspiring
              <span className="theme-purple"> Software Engineer </span>
              with a thirst for learning new technology
            </p>
            <div className="d-sm-flex p-2 justify-content-center align-items-center justify-content-sm-start">
              <ButtonGroup aria-label="resume" className="me-3 py-3">
                <Button
                  variant="btn btn-theme-purple"
                  size="lg"
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </Button>
                <Button
                  variant="btn btn-theme-purple"
                  size="lg"
                  href={Resume}
                  download="RESUME_Bryann"
                >
                  <div>
                    <TbDownload className="align-baseline" />
                  </div>
                </Button>
              </ButtonGroup>

              <HomeIcons />
            </div>
          </div>
          <img
            className="svg img-fluid d-none d-md-block"
            src={Programming}
            alt="Computer"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
