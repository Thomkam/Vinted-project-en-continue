import { Link } from "react-router-dom";
import logo1 from "../img/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/header.css";

const Header = ({ token, handleToken, search, setSearch }) => {
  return (
    <header>
      <div className="logoplace">
        <Link to="/">
          <img className="logo1" src={logo1} alt="" />
        </Link>
      </div>

      {token ? (
        <div>
          <button
            className="btn-logout"
            onClick={() => {
              // Je me déconnecte en appelant la fonction handleToken et en lui donnant null en argument
              handleToken(null);
            }}
          >
            Se déconnecter
          </button>
          <Link to={token ? "/PostAnAd" : "/LogIn"}>
            <button className="btn-vends-tes-art1">Vends tes articles</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="search-bar">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input
              placeholder="Rechercher des articles"
              type="text"
              name="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          <div className="btn-header">
            <Link to="/SignUp">
              <button className="btn-SignUp">S'inscrire</button>
            </Link>
            <Link to="/login">
              <button className="btn-login" to="/login">
                Se connecter
              </button>
            </Link>
            <Link to={token ? "/PostAnAd" : "/LogIn"}>
              <button className="btn-vends-tes-art">Vends tes articles</button>
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
