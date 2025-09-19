import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Spirited-Globe</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ai-support">AI Support</Link></li>
        <li><Link to="/counselling">Counselling</Link></li>
        <li><Link to="/peer-support">Peer Support</Link></li>
        <li><Link to="/admin-dashboard">Admin</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

