import React from "react";
import cartas from "./cartas.jpg";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

const BienvenidaSeccion = () => {
  return (
    <Container className="sectiona" style={{ overflow: "hidden" }} fluid>
      <Row className="container">
        <Col>
          <h1 className="container__h1">Hola, soy Paula Dominguez</h1>
          <p className="parraf">
            Bienvenidos a la magia que guarda todas las respuestas que habitan
            tu alma. Encara tu vida como un gran acontecimiento irrepetible y
            unico.
          </p>
          <Link to={"/sobreMi"} className="btn btn-secondary">
            Sobre mi
          </Link>
        </Col>
        <Col>
          <Image src={cartas} className="imagenCartas" />
        </Col>
      </Row>
    </Container>
  );
};

export default BienvenidaSeccion;

/* <section id="home" className="sectiona">
<div className="container">
  <div>
   
  </div>
  <img id="header-img" src={cartas} alt="cartas" />
</div>
</section> */
