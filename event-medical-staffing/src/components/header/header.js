import "./assets/header.css";
import { Link } from "react-router-dom";
import logo from "./assets/images/ems-logo-blue.png";

function Header() {
  return (
    <div className="header">
      <div className="master-container">
        <div className="header-container">
          <div className="logo-container">
            <img
              src={logo}
              alt="Event Medical Staffing Logo"
              className="ems-header-logo"
            />
          </div>
          <div className="nav-container">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
