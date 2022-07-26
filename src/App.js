import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import "./App.css";
import React from "react";
import usePageTracking from "./Hooks/usePageTracking";

const App = () => {
  usePageTracking();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="author" content="Bryann Yeap Kok Keong" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Personal Portfolio Website belonging to Bryann Yeap Kok Keong"
        />
        <meta
          name="keywords"
          content="Bryann, Yeap, Kok, Keong, Portfolio, Personal, Software, Engineer"
        />
        <link rel="canonical" href="https://bryannyeap.github.io/" />
        <title>Bryann Yeap</title>
      </Helmet>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
