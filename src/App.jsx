import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import { useState } from "react";
 */ import "./App.css";

// Import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

// Import des components
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Offer/:id" element={<Offer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
