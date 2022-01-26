import "./assets/bottomCopyright.css";
import Logo from "./assets/images/ems-logo-white.png";
import { Link } from "react-router-dom";

function bottomCopyright() {
  <div className="master-container">
    <div className="footer-container">
      <div className="footer-logo">
        <img src={Logo} alt="EMS Logo" />
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
  </div>;
}

export default bottomCopyright;
