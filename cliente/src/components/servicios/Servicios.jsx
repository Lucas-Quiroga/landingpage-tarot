import React, { useState, useEffect } from "react";
import ServiciosLista from "./serviciosLista/ServiciosLista";
import serviciosJson from "../../json/servicesJson.json";
import "./ItemListContainer.css";

const Servicios = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(serviciosJson);
  }, []);

  return (
    <div className="overlay_a">
      <ServiciosLista services={services} />
    </div>
  );
};

export default Servicios;
