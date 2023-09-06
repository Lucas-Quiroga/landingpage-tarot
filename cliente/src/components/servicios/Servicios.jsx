import React, { useState, useEffect } from "react";
import ServiciosLista from "./serviciosLista/ServiciosLista";
import serviciosJson from "../../json/servicesJson.json";
import "./ItemListContainer.css";

const Servicios = () => {
  const [services, setServices] = useState([]);
  const [esGrande, setEsGrande] = useState(false);

  useEffect(() => {
    setServices(serviciosJson);
  }, []);

  useEffect(() => {
    const manejarResize = () => {
      setEsGrande(window.innerWidth <= 1500);
    };

    manejarResize();
    window.addEventListener("resize", manejarResize);

    return () => {
      window.removeEventListener("resize", manejarResize);
    };
  }, []);

  return (
    <div className={`overlay_a h-100 ${esGrande ? "" : "pt-4"}`}>
      <ServiciosLista services={services} />
    </div>
  );
};

export default Servicios;
