import BackgroundVideo from "./backgroundVideo/backgroundVideo";
import "./assets/home.css";
import Curve from "./assets/images/top-curve.svg";

function HomePage() {
  return (
    <div className="home-page">
      <img src={Curve} alt="" />
      <BackgroundVideo />
      <div className="home-page-container">
        <p>Hello! Home Page</p>
      </div>
    </div>
  );
}

export default HomePage;
