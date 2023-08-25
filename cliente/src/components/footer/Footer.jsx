import React from "react";
import "./footer.css";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  // FaFacebookSquare,
  // FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  const fecha = new Date().getFullYear();

  return (
    <footer className="mt-auto">
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
                &nbsp;(+54) 9 11 2787-7943
              </li>
            </ul>
            <ul>
              <li>
                <FaMapMarkerAlt style={{ fontSize: 25 }} />
                &nbsp; Oficina en San Justo, La Matanza.
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-md-3">
            <h3>Redes sociales</h3>
            <hr />
            <ul style={{ display: "flex" }}>
              {/* <li>
                <a href="#">
                  <FaFacebookSquare style={{ fontSize: 50 }} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagramSquare style={{ fontSize: 50 }} />
                </a>
              </li> */}
              <li>
                <a href="https://api.whatsapp.com/send?phone=+5491127877943&text=Hello, more information!">
                  <FaWhatsapp style={{ fontSize: 50 }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
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
