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

  return (
    <Container className="overlay" style={{ position: "inherit" }} fluid>
      <Row>
        <Col md={4}>
          <Nav
            id="navbar-example3"
            className="h-100 flex-column align-items-stretch pe-4 border-end"
          >
            <Nav className="nav nav-pills flex-column">
              {jsonAll.map((services) => (
                <Nav.Link
                  key={services.id}
                  onClick={() =>
                    navigate(`/servicios/informacion/${services.id}`)
                  }
                  active={services.id === parseInt(serviceId)}
                >
                  {services.name}
                </Nav.Link>
              ))}
            </Nav>
          </Nav>
        </Col>

        <Col md={8}>
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
                  <h4 style={{ color: "lightskyblue" }}>{services.name}</h4>
                  <p style={{ color: "white" }}>{services.detail}</p>
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
