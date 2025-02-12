import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Navbar from "./components/navbar";
import "./App.css";

import Team from "./pages/Team";
import SubmitPreprint from "./pages/SubmitPreprint";

import Home from "./pages/Home";
import About from "./pages/About";
import LatestPreprints from "./pages/LatestPreprints";

import LoginSignup from "./pages/LoginSignup"; // Ensure the component name matches the import
import PreprintDetails from "./pages/PreprintDetails";

function App() {
  return (
    <div style={{
        backgroundImage: `url('/photo_2025-02-08_11-41-16.jpg')`, // Ensure image is in `public/`
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
      }}
    >
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latestpreprints" element={<LatestPreprints />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/preprint/:id" element={<PreprintDetails />} />
        <Route path="/submitpreprint" element={<SubmitPreprint />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
