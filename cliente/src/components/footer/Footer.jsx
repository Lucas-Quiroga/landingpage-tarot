import React from "react";
import "./footer.css";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const fecha = new Date().getFullYear();

  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-md-3">
            <h3>Información de contacto</h3>
            <hr />
            <ul>
              <li>
                <span>
                  <FaPhoneAlt style={{ fontSize: 25 }} />
                </span>{" "}
                (+54) 9 11 2787-7943
              </li>
              <li>
                <span>
                  <FaEnvelope style={{ fontSize: 25 }} />
                </span>{" "}
                paula.dominguez1946@gmail.com
              </li>
            </ul>
            <ul>
              <li>
                <FaMapMarkerAlt style={{ fontSize: 25 }} />
                Juan Manuel de Rosas 3532 entre Arieta y Almafuerte | piso 2 -
                oficina 18. San Justo, La Matanza.
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-md-3">
            <h3>Redes sociales</h3>
            <hr />
            <ul style={{ display: "flex" }}>
              <li>
                <a href="#">
                  <FaFacebookSquare style={{ fontSize: 50 }} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagramSquare style={{ fontSize: 50 }} />
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=+5491127877943&text=Hello, more information!">
                  <FaWhatsapp style={{ fontSize: 50 }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              border: "1px solid black",
              cursor: "pointer",
            }}
          >
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/servicios"}>Servicios</Link>
            </li>
            {/* <li>
              {" "}
              <Link to={"/cursos"}>Cursos</Link>
            </li> */}
            <li>
              <Link to={"/contacto"}>Contacto</Link>
            </li>
            <li>
              <Link to={"/sobreMi"}>Sobre mi</Link>
            </li>
          </ul>
        </section>
        <div
          className="copyright"
          style={{
            color: "black",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <span>Copyright © {fecha} Quiroga, Lucas - All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
