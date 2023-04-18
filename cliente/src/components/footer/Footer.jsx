import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <p>Información de contacto</p>
            <ul>
              <li>Teléfono: (+54) 9 11 2787-7943</li>
              <li></li>
              <li>Correo electrónico: paula.dominguez1946@gmail.com</li>
            </ul>
            <ul>
              <li>
                Ubicación: Juan Manuel de Rosas 3532 entre Arieta y Almafuerte |
                piso 2 - oficina 18. San Justo, La Matanza.
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <p>Redes sociales</p>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <section>
          <Link to={"/"}>Inicio</Link>
          <Link to={"/servicios"}>Servicios</Link>
          <Link to={"/cursos"}>Cursos</Link>
          <Link to={"/contacto"}>Contacto</Link>
          <Link to={"/sobreMi"}>Sobre mi</Link>
        </section>
        <div className="copyright">
          Copyright © 2021 Quiroga, Lucas - All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
