import "./NavBar.css";

import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Create this file for styling later

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          {/* 'end' prop ensures it only matches the exact path "/" */}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Shop
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
