import React, { useState, useEffect } from "react";
import servicesJson from "./servicesJson.json";

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

  console.log(json);
  return (
    <div>
      {json.map((resp) => (
        <li>{json.name}</li>
      ))}
    </div>
  );
};

export default ItemDetailContainer;
