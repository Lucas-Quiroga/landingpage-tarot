import React, { useState, useEffect } from "react";
import servicesJson from "./servicesJson.json";
import ItemList from "./ItemList/ItemList";
import CarouselServices from "../carouselServices/CarouselServices";
import "./ItemListContainer.css";
import Footer from "../footer/Footer";

const ItemListContainer = () => {
  const [services, setServices] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const promiseServices = new Promise((resolve, reject) => {
        resolve(servicesJson);
      });
      promiseServices.then(function (value) {
        setServices(value);
      });
    }, 2000);
  }, [services]);

  useEffect(() => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 2000);
  }, [services]);

  return (
    <>
      {cargando ? (
        <div className="contenedor_spinner">
          <h2 style={{ color: "white" }}>...Cargando</h2>
          <div class="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="overlay_a">
          <ItemList services={services} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
