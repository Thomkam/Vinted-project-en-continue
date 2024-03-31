import axios from "axios";
import { useState } from "react";
/* import Cookies from "cookies-js";
 */ import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ handleToken }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  //-----------

  /*   const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  }; */
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //-----------

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",

        {
          email: email,
          password: password,
          username: username,
          newsletter: newsletter,
        }
      );
      console.log(response.data.token);
      /*       Cookies.set("Vinted-token", response.data.token, { expires: 15 });
       */ handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
      if (error.response.status === 409) {
        setErrorMessage(
          "This email already has an account, please use another one"
        );
      } else if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Please fill in all the fields");
      }
    }

    console.log("Form submited !", username, email, password);
  };

  return (
    <main className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <input
              type="text"
              placeholder="User Name"
              name="username"
              value={username}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <div className="form-group">
          <div className="checkbox-container">
            <input
              checked={newsletter}
              type="checkbox"
              onChange={() => {
                setNewsletter(!newsletter);
              }}
            />
            <span className="checkbox-label">
              S'inscrire à notre newsletter
            </span>
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value={"S'inscrire"} />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
      <Link to="/login">Already member? Login !</Link>
    </main>
  );
};

export default SignUp;
