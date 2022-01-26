import "./assets/footer.css";
import Menu from "../menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../routes/Home";
import About from "../../routes/About";
import Contact from "../../routes/Contact";
import Employee from "../../routes/Employee";

function Footer() {
  return (
    <div className="footer">
      <BrowserRouter>
        <Menu />
        <div className="router-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="employee" element={<Employee />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Footer;
