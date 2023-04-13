import React from "react";
import "./main.css";
import cartas from "./../main/cartas.jpg";
import { Link } from "react-router-dom";
import Testimonios from "./testimonios/Testimonios";

const Main = () => {
  return (
    <>
      <section id="home" className="sectiona">
        <div className="container">
          <div>
            <h1 className="container__h1">Hola, soy Paula Dominguez</h1>
            <p>
              Bienvenidos a la magia que guarda todas las respuestas que habitan
              tu alma. Encara tu vida como un gran acontecimiento irrepetible y
              unico.
            </p>
            <Link to={"/sobreMi"} className="btn">
              Sobre mi
            </Link>
          </div>
          <img id="header-img" src={cartas} alt="cartas" />
        </div>
      </section>

      <section id="about" className="sectionb">
        <div className="overlay">
          <div className="sectionb-inner">
            <h3>Asomate</h3>
            <h2>El lenguaje del corazon está más allá de las palabras.</h2>
            <p>
              Aunque no lo entendamos hay una bendicion oculta en cada
              dificultad.
            </p>
          </div>
        </div>
      </section>

      <section id="home" className="sectionc">
        <div className="container">
          <div>
            <h2>Hola, soy Paula Dominguez</h2>
            <p>
              Bienvenidos a la magia que guarda todas las respuestas que habitan
              tu alma. Encara tu vida como un gran acontecimiento irrepetible y
              unico.
            </p>
          </div>
        </div>
      </section>
      <Testimonios />
    </>
  );
};

export default Main;
