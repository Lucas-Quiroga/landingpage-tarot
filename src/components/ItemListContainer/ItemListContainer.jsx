import React, { useState } from "react";
import servicesJson from "./servicesJson.json";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = () => {
  const [services, setServices] = useState([]);

  const promiseServices = new Promise((resolve, reject) => {
    resolve(servicesJson);
  });

  promiseServices.then(function (value) {
    setServices(value);
  });

  return <ItemList services={services} />;
};

export default ItemListContainer;
