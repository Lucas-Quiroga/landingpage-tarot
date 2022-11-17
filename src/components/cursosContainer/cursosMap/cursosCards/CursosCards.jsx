import React from "react";

const CursosCards = ({ cursos }) => {
  return (
    <div>
      <div className="cards__container">
        <h1>{cursos.curso}</h1>
        <h3>Clases: {cursos.clases}</h3>
        <h4>Duración: {cursos.duración}</h4>
        <h2>Precio: {cursos.precio}</h2>
        <a href="https://mpago.la/2YrKJ84" target="_blank">
          <button>Comprar</button>
        </a>
      </div>
    </div>
  );
};

export default CursosCards;
