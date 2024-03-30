import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

//Import CSS

import "./App.css";
import "./assets/css/header.css";
import "./assets/css/home.css";
import "./assets/css/login.css";
import "./assets/css/offer.css";
import "./assets/css/signup.css";

// Import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

// Import des components
import Header from "./components/Header";

//Import Font Awsome
/* import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faListAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faKey, faListAlt); */

//------------------------------------------

function App() {
  const [token, setToken] = useState(Cookies.get("vinted-token") || null);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("vinted-token", token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove("vinted-token");
      setToken(null);
    }
  };

  return (
    <>
      <Router>
        <Header token={token} handleToken={handleToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Offer/:id"
            element={<Offer handleToken={handleToken} />}
          />
          <Route
            path="/SignUp/"
            element={<SignUp handleToken={handleToken} />}
          />
          <Route path="/LogIn/" element={<LogIn handleToken={handleToken} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
