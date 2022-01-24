import "./assets/menu.css";
import Items from "./assets/items/items";

function Menu() {
  return (
    <div className="nav-container">
      <div className="menu-button">
        <nav>
          <Items />
        </nav>
      </div>
    </div>
  );
}

export default Menu;
