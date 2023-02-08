import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="top_header">
        <section>
          <span>
            <i className="fa fa-map-marker"></i>
          </span>
          <span>Ubicación:</span>
          <p>
            Juan Manuel de Rosas 3532 entre Arieta y Almafuerte | piso 2 -
            oficina 18. San Justo, La Matanza.
          </p>
        </section>
        <section>
          <span>
            <i className="fa fa-phone"></i>
          </span>
          <span>Télefono:</span>
          <p>(+54) 9 11 2787-7943</p>
        </section>
        <section>
          <span>
            <i className="fa fa-envelope"></i>
          </span>
          <span>Correo electronico:</span>
          <p>paula.dominguez1946@gmail.com</p>
        </section>
      </div>
      <span className="border-shape"></span>
      <div className="bottom_content">
        <section>
          <a>
            <i className="fa fa-facebook"></i>
          </a>
          <a>
            <i className="fa fa-instagram"></i>
          </a>
          <a>
            <i className="fa fa-twitter"></i>
          </a>
          <a>
            <i className="fa fa-telegram"></i>
          </a>
        </section>
        <section>
          <Link to={"/"}>Inicio</Link>
          <Link to={"/servicios"}>Servicios</Link>
          <Link to={"/cursos"}>Cursos</Link>
          <Link to={"/contacto"}>Contacto</Link>
          <Link to={"/sobreMi"}>Sobre mi</Link>
        </section>
      </div>
      <div className="copyright">
        Copyright © 2021 Quiroga, Lucas - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
