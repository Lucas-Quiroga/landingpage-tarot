import React, { useState } from "react";
import CursosMap from "./cursosMap/CursosMap";
import "./CursosContainer.css";

const cursosArray = [
  {
    id: 1,
    curso: "Arcanos mayores",
    clases: 8,
    duración: "256min",
    precio: 16000,
    img: "../../../public/img/tarott.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptate repellat facilis, repudiandae optio earum perferendis quisquam laboriosam ab cupiditate asperiores nemo corrupti. Aliquid fugit voluptas quaerat quod, nam, vitae quisquam cum explicabo a beatae, quis quidem molestias rem doloremque facilis facere accusamus similique totam dolorem sit reiciendis dolores saepe?",
  },
  {
    id: 2,
    curso: "Arcanos menores",
    clases: 8,
    duración: "256min",
    precio: 16000,
    img: "../../../public/img/le.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptate repellat facilis, repudiandae optio earum perferendis quisquam laboriosam ab cupiditate asperiores nemo corrupti. Aliquid fugit voluptas quaerat quod, nam, vitae quisquam cum explicabo a beatae, quis quidem molestias rem doloremque facilis facere accusamus similique totam dolorem sit reiciendis dolores saepe?",
  },
  {
    id: 3,
    curso: "Numerologia",
    clases: 6,
    duración: "226min",
    precio: 13000,
    img: "../../../public/img/reiki.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptate repellat facilis, repudiandae optio earum perferendis quisquam laboriosam ab cupiditate asperiores nemo corrupti. Aliquid fugit voluptas quaerat quod, nam, vitae quisquam cum explicabo a beatae, quis quidem molestias rem doloremque facilis facere accusamus similique totam dolorem sit reiciendis dolores saepe?",
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
      <div className="cursosMapContainer">
        <CursosMap cursos={cursos} />
      </div>
    </div>
  );
};

export default CursosContainer;
