import React from "react";
import "./cursosCard.css";

const CursosCards = ({ cursos }) => {
  return (
    <div>
      <div className="cards__container">
        <div className="cards__grid">
          <h1>{cursos.curso}</h1>
          <h3>Clases: {cursos.clases}</h3>
          <h4>Duración: {cursos.duración}</h4>
          <h2>Precio: {cursos.precio}</h2>
          <a href="https://mpago.la/2YrKJ84" target="_blank">
            <span className="cards__info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              error optio commodi voluptatum reiciendis cupiditate? Asperiores,
              est quod. Quis, porro?
            </span>
            <button>Comprar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CursosCards;
