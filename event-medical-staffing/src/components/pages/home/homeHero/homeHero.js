import { Link } from "react-router-dom";
import "./assets/homeHero.css";

function HomeHero() {
  return (
    <div className="master-container">
      <div className="home-hero-wrapper">
        <div className="hero-copy-container">
          <h1>EMS Staffing for any Event</h1>
          <div className="hero-button-container">
            <Link to="/contact">
              <p>Contact</p>
            </Link>
            <Link to="/about">
              <p>Learn More</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
