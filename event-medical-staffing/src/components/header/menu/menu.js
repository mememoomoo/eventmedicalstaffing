import "./assets/menu.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import homeIcon from "./assets/home-icon.png";

function Menu() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="nav-wrapper"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <button className="menu-button"></button>
      {isShown && (
        <div className="nav-container">
          <nav>
            <Link to="/">
              <img src={homeIcon} alt="" />
              <p>Home</p>
            </Link>
            <Link to="/about">
              <img src={homeIcon} alt="" />
              <p>About</p>
            </Link>
            <Link to="/contact">
              <img src={homeIcon} alt="" />
              <p>Contact</p>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Menu;
