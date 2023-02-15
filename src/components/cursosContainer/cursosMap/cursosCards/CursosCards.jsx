import React from "react";
import { Link } from "react-router-dom";
import "./cursosCard.css";

const CursosCards = ({ cursos }) => {
  return (
    <div className="plan-card">
      <h2>
        {cursos.curso}
        <span></span>
      </h2>
      <div className="etiquet-price">
        <p>{cursos.precio}</p>
        <div></div>
      </div>
      <div className="benefits-list">
        <ul>
          <li>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
            </svg>
            <span>+16 videos</span>
          </li>
          <li>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
            </svg>
            <span>100 horas</span>
          </li>
          <li>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
            </svg>
            <span>certificado</span>
          </li>
        </ul>
      </div>
      <div className="button-get-plan">
        <Link to="/check-out">
          <span>COMPRAR CURSO</span>
        </Link>
      </div>
      <div className="button-get-plan">
        <Link to={`/cursos/${cursos.id}`}>
          <span>SOBRE EL CURSO</span>
        </Link>
      </div>
    </div>
  );
};

export default CursosCards;

{
  /* <div>
      <div classNameName="cards__container">
        <div classNameName="cards__grid">
          <h1>{cursos.curso}</h1>
          <h3>Clases: {cursos.clases}</h3>
          <h4>Duración: {cursos.duración}</h4>
          <h2>Precio: {cursos.precio}</h2>
          <a href="https://mpago.la/2YrKJ84" target="_blank">
            <span classNameName="cards__info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              error optio commodi voluptatum reiciendis cupiditate? Asperiores,
              est quod. Quis, porro?
            </span>
            <button>Comprar</button>
          </a>
        </div>
      </div>
    </div> */
}
