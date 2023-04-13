import React, { useState, useEffect } from "react";
import servicesJson from "./servicesJson.json";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [json, setJson] = useState({});

  const { serviceId } = useParams();

  useEffect(() => {
    const getJson = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(servicesJson);
      }, 2000);
    });
    getJson.then((resolve) =>
      setJson(resolve.find((services) => services.id === parseInt(serviceId)))
    );
  }, []);

  return <ItemDetail json={json} />;
};

export default ItemDetailContainer;
