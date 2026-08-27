import { LOGO_URL } from "../utils/Constants.js";
import { useState } from "react";
const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} alt="logo image" />

      <ul className="links">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button
          className="login"
          onClick={() => {
            login ? setLogin(false) : setLogin(true);
          }}
        >
          {login ? "Log out" : "Log in"}
        </button>
      </ul>
    </div>
  );
};

export default Header;
