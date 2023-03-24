import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Redux Practice</h2>
      <Link to="/" className="nav-link">
        Posts
      </Link>
    </div>
  );
};

export default Navbar;
