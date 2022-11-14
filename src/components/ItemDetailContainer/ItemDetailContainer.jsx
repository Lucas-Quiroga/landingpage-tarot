import React, { useState, useEffect } from "react";
import servicesJson from "./servicesJson.json";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [json, setJson] = useState({});

  useEffect(() => {
    const getJson = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(servicesJson);
      }, 2000);
    });
    getJson.then((resolve) => setJson(resolve));
  }, []);

  return <ItemDetail json={json} />;
};

export default ItemDetailContainer;
