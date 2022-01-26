import { Link } from "react-router-dom";
import "./assets/items.css";

import HomeIcon from "./assets/images/home-icon.svg";
import AboutIcon from "./assets/images/about-icon.svg";
import ContactIcon from "./assets/images/contact-icon.svg";

function Items() {
  return (
    <nav className="footer-nav-container">
      <Link to="/">
        <img src={HomeIcon} alt="" />
        <p>Home</p>
      </Link>
      <Link to="/about">
        <img src={AboutIcon} alt="" />
        <p>About</p>
      </Link>
      <Link to="/contact">
        <img src={ContactIcon} alt="" />
        <p>Contact</p>
      </Link>
    </nav>
  );
}

export default Items;
