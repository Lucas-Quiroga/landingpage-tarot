import React, { useState } from "react";
import CursosMap from "./cursosMap/CursosMap";

let cursosArray = [
  {
    id: 1,
    curso: "Arcanos mayores",
    clases: 8,
    duración: "256min",
    precio: 16000,
  },
  {
    id: 2,
    curso: "Arcanos menores",
    clases: 8,
    duración: "256min",
    precio: 16000,
  },
  {
    id: 3,
    curso: "Numerologia",
    clases: 6,
    duración: "226min",
    precio: 13000,
  },
];

const CursosContainer = () => {
  const [cursos, setCursos] = useState([]);

  const getCursos = new Promise((resolve, reject) => {
    resolve(cursosArray);
  });

  getCursos.then((respuesta) => {
    setCursos(respuesta);
  });

  return (
    <div>
      <h1>
        <span>
          Para quienes se embarquen en aprender el camino del tarot como
          solidario ancestral, pasen por ahi. les dejo la guia de enseñanzas.
        </span>
      </h1>
      <CursosMap cursos={cursos} />;
    </div>
  );
};

export default CursosContainer;
