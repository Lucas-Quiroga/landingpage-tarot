import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import icon from "./tarot.jpg";

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
            Inicio
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
        <li>
          <Link to={"/"} className="a">
            <img src={icon} alt="icon" className="img__icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
