import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import NavScript from "./NavScript";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="toggle menu">
        <i className="fa fa-bars">hola</i>
      </div>
      <ul>
        <li>
          <Link to={"/"} className="a">
            Icon
          </Link>
        </li>
        <li>
          <Link to={"/"} className="a">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/servicios"} className="a">
            Servicios
          </Link>
        </li>
        <li>
          <Link to={"/cursos"} className="a">
            Cursos
          </Link>
        </li>
      </ul>
      <navScript />
    </nav>
  );
};

export default Navbar;
