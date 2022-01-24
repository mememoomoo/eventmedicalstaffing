import { Link } from "react-router-dom";
import homeIcon from "../home-icon.png";
import aboutIcon from "../about-icon.png";
import contactIcon from "../contact-icon.png";

function Items() {
  return (
    <div>
      <Link to="/">
        <img src={homeIcon} alt="Home" />
        <p>Home</p>
      </Link>
      <Link to="/about">
        <img src={aboutIcon} alt="About" />
        <p>About</p>
      </Link>
      <Link to="/contact">
        <img src={contactIcon} alt="Contact" />
        <p>Contact</p>
      </Link>
    </div>
  );
}

export default Items;
