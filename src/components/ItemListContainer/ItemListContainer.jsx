import React, { useState, useEffect } from "react";
import servicesJson from "./servicesJson.json";

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

  console.log(services);

  return <div>ItemListContainer</div>;
};

export default ItemListContainer;
