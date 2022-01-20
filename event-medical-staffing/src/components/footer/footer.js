import "./assets/footer.css";
import { Link } from "react-router-dom";
import logo from "./assets/images/ems-logo-white.png";

function Footer() {
  return (
    <div className="footer">
      <div className="master-container">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo} alt="EMS Logo" />
          </div>
          <div className="copyright-container">
            <p>&copy;{new Date().getFullYear()} Event Medical Staffing</p>
          </div>
          <div className="employee-container">
            <nav>
              <Link to="/employee">Work With Us</Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
