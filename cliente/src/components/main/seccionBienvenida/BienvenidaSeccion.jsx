import React from "react";
import cartas from "./cartas.jpg";
import { Link } from "react-router-dom";

const BienvenidaSeccion = () => {
  return (
    <section id="home" className="sectiona">
      <div className="container">
        <div>
          <h1 className="container__h1">Hola, soy Paula Dominguez</h1>
          <p className="parraf">
            Bienvenidos a la magia que guarda todas las respuestas que habitan
            tu alma. Encara tu vida como un gran acontecimiento irrepetible y
            unico.
          </p>
          <Link to={"/sobreMi"} className="btn btn-secondary">
            Sobre mi
          </Link>
        </div>
        <img id="header-img" src={cartas} alt="cartas" />
      </div>
    </section>
  );
};

export default BienvenidaSeccion;
