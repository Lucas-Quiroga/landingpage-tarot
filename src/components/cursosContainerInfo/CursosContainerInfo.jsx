import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CursosContainerInfo.css";

const cursosArray = [
  {
    id: 1,
    curso: "Arcanos mayores",
    clases: 8,
    duración: "256min",
    precio: 16000,
    información:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptate repellat facilis, repudiandae optio earum perferendis quisquam laboriosam ab cupiditate asperiores nemo corrupti. Aliquid fugit voluptas quaerat quod, nam, vitae quisquam cum explicabo a beatae, quis quidem molestias rem doloremque facilis facere accusamus similique totam dolorem sit reiciendis dolores saepe?",
  },
  {
    id: 2,
    curso: "Arcanos menores",
    clases: 8,
    duración: "256min",
    precio: 16000,
    información:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptate repellat facilis, repudiandae optio earum perferendis quisquam laboriosam ab cupiditate asperiores nemo corrupti. Aliquid fugit voluptas quaerat quod, nam, vitae quisquam cum explicabo a beatae, quis quidem molestias rem doloremque facilis facere accusamus similique totam dolorem sit reiciendis dolores saepe?",
  },
  {
    id: 3,
    curso: "Numerologia",
    clases: 6,
    duración: "226min",
    precio: 13000,
    información:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptate repellat facilis, repudiandae optio earum perferendis quisquam laboriosam ab cupiditate asperiores nemo corrupti. Aliquid fugit voluptas quaerat quod, nam, vitae quisquam cum explicabo a beatae, quis quidem molestias rem doloremque facilis facere accusamus similique totam dolorem sit reiciendis dolores saepe?",
  },
];

const CursosContainerInfo = () => {
  const [cursos, setCursos] = useState({});
  const [show, setShow] = useState(false);

  const { cursosId } = useParams();

  useEffect(() => {
    const getJson = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(cursosArray);
      }, 2000);
    });
    getJson.then((resolve) =>
      setCursos(resolve.find((services) => services.id === parseInt(cursosId)))
    );
  }, []);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, [cursosId]);

  return (
    <div>
      {show ? (
        <div class="item">
          <h4>Cargando...</h4>
          <div class="loader-pulse"></div>
        </div>
      ) : (
        <div class="card__curso">
          <div class="card-details">
            <p class="text-title">{cursos.curso}</p>
            <p class="text-body">{cursos.información}</p>
            <p className="text-body">
              <span>Duración: {cursos.duración}</span>
            </p>
          </div>
          <button class="card-button__curso">More info</button>
        </div>
      )}
    </div>
  );
};

export default CursosContainerInfo;
