import { LOGO_URL } from "../utils/Constants.js";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} alt="logo image" />

      <ul className="links">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
