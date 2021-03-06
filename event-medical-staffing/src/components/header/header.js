import "./assets/header.css";
import logo from "./assets/images/ems-logo-white.png";
import Menu from "./menu/menu";

function Header() {
  return (
    <div className="header">
      <div className="master-container">
        <div className="header-wrapper">
          <div id="header-container">
            <div className="logo-container">
              <img src={logo} alt="Event Medical Staffing Logo" />
              <p>Event Medical Staffing</p>
            </div>
            <div className="menu-button-container">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
