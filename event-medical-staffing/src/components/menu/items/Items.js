import { Link } from "react-router-dom";
import "./assets/items.css";

function Items() {
  return (
    <nav className="footer-nav-container">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
      <Link to="/contact">
        <p>Contact</p>
      </Link>
    </nav>
  );
}

export default Items;
