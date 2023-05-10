import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

  return (
    <nav>
    <ul id= "navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/mission-statement">Mission Statement</Link>
      </li>
      <li>
        <Link to="/screenprints">Screenprints</Link>
      </li>
      <li>
        <Link to="/youtube">Youtube</Link>
      </li>
    </ul>
    </nav>
  );
}

export default NavBar;