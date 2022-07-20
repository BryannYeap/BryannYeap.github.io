import React from "react";
import Computer from "../Images/computer.png";

function Intro() {
  return (
    <section className="bg-dark text-light p-5 text-center">
      <div className="container">
        <div>
          <h1>Hello, My name is Bryann</h1>
          <img src={Computer} alt="Computer" />
        </div>
      </div>
    </section>
  );
}

export default Intro;
