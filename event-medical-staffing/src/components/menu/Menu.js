import "./assets/menu.css";
import Items from "./items/Items";
import Logo from "./logo/Logo";
import Copyright from "./copyright/Copyright";

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-wrapper">
        <Logo />
        <Items />
      </div>
      <div className="menu-content">
        <p>Lorem Ipsum</p>
      </div>
      <div class="menu-footer">
        <Copyright />
      </div>
    </div>
  );
}

export default Menu;
