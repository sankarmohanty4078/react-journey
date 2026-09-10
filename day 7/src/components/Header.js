import { LOGO_URL } from "../utils/Constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} alt="logo image" />

      <ul className="links">
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          {/* This statement will refreh the whole page just for loaing About
          component 
          and i have purposedly left this as an anchor tag to notice the loading speed while not
           using react and refreshing the whole page*/}
          <a href="/about">About Us</a>
        </li>
        <li>
          {/* This will only replace the Body component with the Contact component instead of refreshin the whole page 
          so it is fast and this feature makes react better than html */}
          <Link to="/contact">Contact</Link>
        </li>
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
