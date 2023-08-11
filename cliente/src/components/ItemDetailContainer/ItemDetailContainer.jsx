import React, { useState, useEffect } from "react";
import servicesJson from "../../json/servicesJson.json";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "./../spinnerView/SpinnerView";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ItemDetailContainer = () => {
  const [json, setJson] = useState({});
  const [jsonAll, setJsonAll] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropMedium, setShowDropMedium] = useState(false);
  // const [cargando, setCargando] = useState(false);

  const navigate = useNavigate();

  const { serviceId } = useParams();

  async function getJson() {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(servicesJson);
      }, 2000);
    });
  }

  useEffect(() => {
    getJson().then((data) => {
      setJsonAll(data);
      setJson(data.find((service) => service.id === parseInt(serviceId)));
    });
  }, [serviceId]);

  // useEffect(() => {
  //   setCargando(true);
  //   setTimeout(() => {
  //     setCargando(false);
  //   }, 2000);
  // }, []);

  // console.log(typeof serviceId);

  useEffect(() => {
    const handleResize = () => {
      setShowDropdown(window.innerWidth <= 992);
      // setShowDropMedium(window.innerWidth >= 600);
    };

    handleResize(); // Verificar el tamaño de la pantalla al cargar la página

    window.addEventListener("resize", handleResize); // Escuchar cambios en el tamaño de la pantalla

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el evento al desmontar el componente
    };
  }, []);

  return (
    <Container className="overlay" style={{ position: "inherit" }} fluid>
      <Row>
        <Col lg={4} md={12} sm={12} style={{ padding: "0 20px 0 20px" }}>
          <Nav
            id="navbar-example3"
            className={`h-100 flex-column align-items-stretch ${
              showDropdown ? "" : "pe-4 border-end"
            }`}
          >
            <Nav className="nav nav-pills flex-column">
              <div
                className={`bg-light mt-3 ${showDropMedium ? "d-flex" : ""}"`}
                style={{ borderRadius: "1rem" }}
              >
                {" "}
                {jsonAll.map((services) => (
                  <Nav.Link
                    style={{ margin: "10px" }}
                    key={services.id}
                    href={`#${services.id}`}
                    onClick={() =>
                      navigate(`/servicios/informacion/${services.id}`)
                    }
                    active={services.id === parseInt(serviceId)}
                  >
                    <p style={{ color: "black" }}>
                      {" "}
                      {services.name.toUpperCase()}
                    </p>
                  </Nav.Link>
                ))}
              </div>
            </Nav>
          </Nav>
        </Col>

        <Col lg={8} md={12} sm={12}>
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-offset="0"
            className="scrollspy-example-2"
            tabIndex="0"
          >
            {jsonAll.map((services) => (
              <ul
                key={services.id}
                className="list-group"
                id={`${services.id}`}
              >
                <li
                  className={`list-group-item ${
                    services.id === parseInt(serviceId) ? "active" : ""
                  }`}
                >
                  <h4 style={{ color: "black" }}>{services.name}</h4>
                  <p style={{ color: "black" }}>{services.detail}</p>
                </li>
              </ul>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;

// {cargando ? <Spinner /> : <ItemDetail json={json} />}
