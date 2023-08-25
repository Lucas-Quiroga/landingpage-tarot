import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/esm/NavLink";

const NavbarHeader = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
      <Container className="p-1">
        <Navbar.Brand as={Link} to="/">
          Paula Vidente
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex justify-content-center mx-auto gap-4">
            <NavLink eventKey={1} as={Link} to="/">
              Inicio
            </NavLink>
            <NavLink
              eventKey={2}
              as={Link}
              to="/servicios"
              style={{
                color: `${
                  location.pathname.includes("/servicios")
                    ? "#fff"
                    : "#FFFFFF8C"
                }`,
              }}
            >
              Servicios
            </NavLink>
            <NavLink
              eventKey={3}
              as={Link}
              to="/informacion"
              className={`${
                location.pathname.includes("/informacion") ? "active" : ""
              }`}
            >
              Información
            </NavLink>
            <NavLink eventKey={4} as={Link} to="/sobreMi">
              Sobre mi
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
