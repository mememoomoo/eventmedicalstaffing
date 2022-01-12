import "./assets/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <nav>
        <Link to="/employee">Work With Us</Link>
      </nav>
    </div>
  );
}

export default Footer;
