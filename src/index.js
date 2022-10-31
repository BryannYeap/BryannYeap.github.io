import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ReactGA from "react-ga";
import GA4React from "ga-4-react";

const TRACKING_ID = "UA-247681701-1";
ReactGA.initialize(TRACKING_ID);

const ga4react = new GA4React("G-BC295HJ8Z3");

(async (_) => {
  await ga4react.initialize().finally(() => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    );
  });
})();
