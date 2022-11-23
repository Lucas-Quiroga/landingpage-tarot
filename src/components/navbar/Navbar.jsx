import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar-container">
      <div className="toggle menu">
        <i className="bx bx-menu" onClick={handleClick}>
          hola
        </i>
      </div>
      <ul className={active ? "active" : ""}>
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
        <li>
          <Link to={"/contacto"} className="a">
            Contacto
          </Link>
        </li>
        <li>
          <Link to={"/sobreMi"} className="a">
            Sobre mi
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
