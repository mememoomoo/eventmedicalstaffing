import logo from "./assets/ems-logo-yellow.svg";
import "./assets/logo.css";

function Logo() {
  return (
    <div className="footer-logo-container">
      <img src={logo} alt="Event Medical Staffing Logo" />
      <div className="footer-logo-text">
        <p>Event</p>
        <p>Medical Staffing</p>
      </div>
    </div>
  );
}

export default Logo;
