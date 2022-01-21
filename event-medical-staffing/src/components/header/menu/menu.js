import "./assets/menu.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Toggle from "react-toggle";
import Items from "./assets/items/items";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="menu-button"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <Toggle onClick={() => setIsOpen((isOpen) => !isOpen)} />
      <Items />
    </motion.nav>
  );
}

export default Menu;
