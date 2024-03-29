import React from "react";
import Item from "./Item/Item";
import "./ItemList.css";

const ServiciosLista = ({ services }) => {
  return (
    <div className="divItemList">
      <div className="mapStyle">
        {services.map((resp) => (
          <Item key={resp.id} item={resp} />
        ))}
      </div>
    </div>
  );
};

export default ServiciosLista;
