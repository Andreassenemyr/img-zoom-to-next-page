import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/home";
import Model from "./pages/model";

import "./App.scss";

function App() {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <Router>
      <AnimatePresence exit>
        <Routes>
          <Route path="/" element={<Home imageDetails={imageDetails} />} />
          <Route
            path="/model/:id"
            element={<Model imageDetails={imageDetails} />}
          />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
