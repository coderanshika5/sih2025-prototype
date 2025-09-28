// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h1 className="logo">Healing Sphere</h1>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/ai-support">AI Support</Link></li>
//         <li><Link to="/counselling">Counselling</Link></li>
//         <li><Link to="/peer-support">Peer Support</Link></li>
//         <li><Link to="/admin-dashboard">Admin</Link></li>
//         <li><Link to="/resources">Resources</Link></li>
//         <li><Link to="/about">About</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import logoIcon from "../assets/logo-icon.jpg"; // path to leaf circle
import logoText from "../assets/logo-text.jpg"; // path to Healing Sphere text

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logoIcon} alt="Logo Icon" className="logo-icon" />
        <img src={logoText} alt="Healing Sphere" className="logo-text" />
      </Link>

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