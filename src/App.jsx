import { useState } from "react";
import "./App.css";
import "./pages/Signup";
import Signup2 from "./pages/Signup2.jsx";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Signup2" element={<Signup2 />} />
      </Routes>
    </Router>
  );
};

export default App;
