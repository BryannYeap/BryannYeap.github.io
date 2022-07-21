import "./App.css";
import CustomNavbar from "./Components/CustomNavbar";
import React from "react";
import Intro from "./Components/Intro";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <Intro />
      </div>
    );
  }
}

export default App;
