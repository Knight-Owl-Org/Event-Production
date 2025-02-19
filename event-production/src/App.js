// src/App.js
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <Router>
      {/* Apply background color to the entire page */}
      <div className="min-h-screen bg-[#121212]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
