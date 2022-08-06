import React from "react";
import CustomNavbar from "../Components/CustomNavbar";
import InfoWithPic from "../Components/About/InfoWithPic";
import Skills from "../Components/About/Skills";

function About() {
  return (
    <div className="fade">
      <CustomNavbar />
      <InfoWithPic />
      <Skills />
    </div>
  );
}

export default About;
