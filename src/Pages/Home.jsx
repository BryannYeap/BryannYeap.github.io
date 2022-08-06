import React from "react";
import CustomNavbar from "../Components/CustomNavbar";
import Intro from "../Components/Home/Intro";

function Home() {
  return (
    <div className="fade">
      <CustomNavbar />
      <Intro />
    </div>
  );
}

export default Home;
