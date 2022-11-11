import React, { useState, useEffect } from "react";
import servicesJson from "./servicesJson.json";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = () => {
  const [services, setServices] = useState([]);

  const promiseServices = new Promise((resolve, reject) => {
    resolve(servicesJson);
  });

  useEffect(() => {
    promiseServices.then((resolve) => {
      setServices(resolve);
    });
  }, []);

  return <ItemList services={services} />;
};

export default ItemListContainer;
