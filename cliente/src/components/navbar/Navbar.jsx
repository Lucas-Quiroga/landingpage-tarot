import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import icon from "./tarot.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/esm/NavLink";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarHeader = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Paula Vidente</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex justify-content-center mx-auto gap-4">
            <NavLink eventKey={1} as={Link} to="/">
              Inicio
            </NavLink>
            <NavLink eventKey={2} as={Link} to="/servicios">
              Servicios
            </NavLink>
            <NavLink eventKey={3} as={Link} to="/servicios/informacion">
              Información
            </NavLink>
            <NavLink eventKey={4} as={Link} to="/Contacto">
              Contacto
            </NavLink>
            <NavLink eventKey={5} as={Link} to="/sobreMi">
              Sobre mi
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
