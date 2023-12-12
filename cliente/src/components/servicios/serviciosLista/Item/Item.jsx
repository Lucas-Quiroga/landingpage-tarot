import React, { useState } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Modal, Form } from "react-bootstrap";

const Item = ({ item }) => {
  const [show, setShow] = useState(false);
  const [itemSeleccionado, setItemSeleccionado] = useState(null);
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: "",
    servicio: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function agarrarItem(nombreServicio) {
    setItemSeleccionado(nombreServicio);
    handleShow();
  }

  function agarrarDatosDelUsuario(e) {
    const { name, value } = e.target;
    setDatosUsuario({ ...datosUsuario, [name]: value });
  }

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{item.name.toUpperCase()}</Card.Title>

        <Card.Text>{item.information}</Card.Text>
        <Card.Footer>
          <Link to={`/informacion/${item.id}`}>
            <Button variant="secondary" className="w-100">
              Ver detalles
            </Button>
          </Link>
          <Button
            variant="dark"
            className="w-100"
            onClick={() => agarrarItem(item.name)}
          >
            Solicitar Servicio
          </Button>
        </Card.Footer>
      </Card.Body>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Complete los datos por favor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                autoFocus
                required
                onChange={agarrarDatosDelUsuario}
              />
            </Form.Group>
            <Form.Label>Servicio</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="servicio"
              onChange={agarrarDatosDelUsuario}
            >
              <option value={itemSeleccionado}>{itemSeleccionado}</option>
              <option disabled>--- Otros servicios ---</option>
              {[
                "Lectura de tarot",
                "Limpieza energética",
                "Reiki",
                "Terapia de sanación",
              ].map(
                (option) =>
                  option !== itemSeleccionado && (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  )
              )}
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            href={`https://api.whatsapp.com/send?phone=541127877943&text=Hola%20mi%20nombre%20es%20${
              datosUsuario.nombre
            }%2C%20me%20interesa%20el%20servicio%20de%20${
              datosUsuario.servicio || itemSeleccionado
            }%20😊`}
            target="_blanck"
            disabled={!datosUsuario.nombre}
          >
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default Item;
