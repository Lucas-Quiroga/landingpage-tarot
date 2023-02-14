import React, { useState } from "react";
import servicesJson from "./servicesJson.json";
import ItemList from "./ItemList/ItemList";
import CarouselServices from "../carouselServices/CarouselServices";

const ItemListContainer = () => {
  const [services, setServices] = useState([]);

  const promiseServices = new Promise((resolve, reject) => {
    resolve(servicesJson);
  });

  promiseServices.then(function (value) {
    setServices(value);
  });

  return (
    <div>
      <ItemList services={services} />
      <CarouselServices />
    </div>
  );
};

export default ItemListContainer;
