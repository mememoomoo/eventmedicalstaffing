import "./assets/menu.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import homeIcon from "./assets/home-icon.png";
import aboutIcon from "./assets/about-icon.png";
import contactIcon from "./assets/contact-icon.png";

function Menu() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="nav-wrapper"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={() => setIsShown(isShown)}
    >
      <div className="menu-button"></div>
      {isShown && (
        <div className="nav-container">
          <nav>
            <Link to="/">
              <img src={homeIcon} alt="Home" />
              <p>Home</p>
            </Link>
            <Link to="/about">
              <img src={aboutIcon} alt="About" />
              <p>About</p>
            </Link>
            <Link to="/contact">
              <img src={contactIcon} alt="Contact" />
              <p>Contact</p>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Menu;
