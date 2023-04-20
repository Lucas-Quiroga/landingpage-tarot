import React, { useState, useEffect } from "react";
import servicesJson from "./servicesJson.json";
import ItemList from "./ItemList/ItemList";
import "./ItemListContainer.css";
import SpinnerView from "../spinnerView/SpinnerView";
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
        <SpinnerView />
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
