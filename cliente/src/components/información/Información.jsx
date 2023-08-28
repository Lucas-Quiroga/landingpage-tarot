import React, { useState, useEffect } from "react";
import serviciosJson from "../../json/servicesJson.json";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Accordion } from "react-bootstrap";
import "./Información.css";

const Información = () => {
  const { serviceId } = useParams();
  const [servicios, setServicios] = useState([]);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [esMobile, setEsMobile] = useState(false);
  const [mobileReferencia, setMobileReferencia] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setServicios(serviciosJson);
    setServicioSeleccionado(
      serviciosJson.find((servicio) => servicio.id === parseInt(serviceId))
    );
  }, [serviceId]);

  useEffect(() => {
    if (servicioSeleccionado) {
      const elemento = document.getElementById(`${servicioSeleccionado.id}`);
      if (elemento) {
        elemento.scrollIntoView({
          behavior: "instant",
          block: "center",
          inline: "center",
        });
      }
    }
  }, [servicioSeleccionado]);

  useEffect(() => {
    const manejarResize = () => {
      setEsMobile(window.innerWidth <= 992);
      setMobileReferencia(window.innerWidth <= 500);
    };

    manejarResize();
    window.addEventListener("resize", manejarResize);

    return () => {
      window.removeEventListener("resize", manejarResize);
    };
  }, []);

  return (
    <Container className="overlay" style={{ position: "inherit" }} fluid>
      <Row>
        <Col lg={4} md={12} sm={12} style={{ padding: "0 20px 0 20px" }}>
          {mobileReferencia ? (
            <div className="mt-3">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Otros servicios</Accordion.Header>
                  <Accordion.Body>
                    <Nav className="d-flex flex-column">
                      {servicios.map((servicio) => (
                        <Nav.Link
                          key={servicio.id}
                          onClick={() =>
                            navigate(`/informacion/${servicio.id}`)
                          }
                          active={servicio.id === parseInt(serviceId)}
                        >
                          {servicio.name.toUpperCase()}
                        </Nav.Link>
                      ))}
                    </Nav>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          ) : (
            <Nav
              id="navbar-example3"
              className={`h-100 flex-column align-items-stretch ${
                esMobile ? "" : "pe-4 border-end"
              }`}
            >
              <Nav className="nav nav-pills flex-column">
                <div
                  className={`bg-light mt-3 ${esMobile ? "d-flex" : ""}"`}
                  style={{ borderRadius: "1rem" }}
                >
                  {servicios.map((servicio) => (
                    <Nav.Link
                      style={{ margin: "10px" }}
                      key={servicio.id}
                      onClick={() => navigate(`/informacion/${servicio.id}`)}
                      active={servicio.id === parseInt(serviceId)}
                    >
                      <p style={{ color: "black" }}>
                        {servicio.name.toUpperCase()}
                      </p>
                    </Nav.Link>
                  ))}
                </div>
              </Nav>
            </Nav>
          )}
        </Col>

        <Col lg={8} md={12} sm={12}>
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-offset="0"
            className="scrollspy-example-2"
            tabIndex="0"
          >
            {servicios.map((servicio) => (
              <ul
                key={servicio.id}
                className="list-group"
                id={`${servicio.id}`}
              >
                <li
                  className={`list-group-item ${
                    servicio.id === parseInt(serviceId) ? "active" : ""
                  }`}
                >
                  <h4 style={{ color: "black" }}>{servicio.name}</h4>
                  <p style={{ color: "black" }}>{servicio.detail}</p>
                </li>
              </ul>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Información;
