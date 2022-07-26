import React from "react";
import Container from "react-bootstrap/Container";

function InfoWithPic() {
  return (
    <section className="pt-5 pb-3 bg-theme-dark text-white">
      <Container className="d-lg-flex align-items-center">
        <div className="d-flex justify-content-center mb-5 mx-5">
          <div className="circle-portrait"></div>
        </div>
        <div className="text-start mx-2">
          <h3 className="font-verdana">
            <p>
              <strong>
                Hello! I'm <span className="theme-purple">Bryann</span>
              </strong>
            </p>
          </h3>
          <p className="my-4 lead">
            I'm an undergraduate student studying at the{" "}
            <span className="theme-purple">
              National University of Singapore
            </span>
            , and I'm currently pursuing a Bachelor of Computing in Computer
            Science. I aim to be a software engineer in the future, with
            interests leaning toward{" "}
            <span className="theme-purple">
              back-end development, computer networking, and database systems
            </span>
            . However, I do try to dabble in a little front-end too, as seen
            from this portfolio website!
          </p>
          <p className="lead">
            I am someone who always likes to explore around and try out
            different{" "}
            <span className="theme-purple">
              libraries, frameworks, tools, and languages
            </span>{" "}
            that I've not used before. As such, if you scroll down, you will see
            the many different tech stacks that I've had the pleasure of
            utilizing{" "}
            <span className="theme-purple">
              across a myriad of varying projects
            </span>
            . Generally, the technologies listed at the top are those that I
            have used more frequently or recently, as opposed to the items
            listed lower down on the list. Do take a look!
          </p>
        </div>
      </Container>
    </section>
  );
}

export default InfoWithPic;
