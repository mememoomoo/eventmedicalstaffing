import "./assets/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Header;
