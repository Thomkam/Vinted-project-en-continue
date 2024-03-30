import { Link } from "react-router-dom";
import logo1 from "../img/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/header.css";

const Header = ({ token, handleToken }) => {
  return (
    <header>
      <div className="logoplace">
        <img className="logo1" src={logo1} alt="" />
      </div>
      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        <input type="text" placeholder="Rechercher des articles" />
      </div>

      {token ? (
        <button
          onClick={() => {
            // Je me déconnecte en appelant la fonction handleToken et en lui donnant null en argument
            handleToken(null);
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <>
          <div className="btn-header">
            <Link to="/SignUp">
              <button className="btn-SignUp">S'inscrire</button>
            </Link>
            <Link to="/login">
              <button className="btn-login" to="/login">
                Se connecter
              </button>
            </Link>
            <Link>
              <button className="btn-vends-tes-art" to="/SignUp">
                Vends tes articles
              </button>
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
