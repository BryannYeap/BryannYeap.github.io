import "./App.css";
import CustomNavbar from "./Components/CustomNavbar";
import React from "react";
import Intro from "./Components/Intro";

class App extends React.Component {
  componentDidMount() {
    document.title = "Bryann Yeap";
    document.body.style.backgroundColor = "#5D6D7E";
  }

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
