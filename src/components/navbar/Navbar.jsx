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
    <nav>
      <input type="checkbox" id="toggle-menu" />
      <label for="toggle-menu" class="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="menu">
        <li className="buttonStyle">
          <Link to={"/"} className="a">
            Inicio
          </Link>
        </li>
        <li className="buttonStyle">
          <Link to={"/servicios"} className="a">
            Servicios
          </Link>
        </li>
        <li className="buttonStyle">
          <Link to={"/cursos"} className="a">
            Cursos
          </Link>
        </li>
        <li className="buttonStyle">
          <Link to={"/contacto"} className="a">
            Contacto
          </Link>
        </li>
        <li className="buttonStyle">
          <Link to={"/sobreMi"} className="a">
            Sobre mi
          </Link>
        </li>
        {/* <li>
          <Link to={"/"} className="a">
            <img src={icon} alt="icon" className="img__icon" />
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
