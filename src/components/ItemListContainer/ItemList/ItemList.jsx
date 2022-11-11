import React from "react";
import Item from "./Item/Item";

const ItemList = ({ services }) => {
  return (
    <div>
      {services.map((resp) => (
        <Item key={resp.id} item={resp} />
      ))}
    </div>
  );
};

export default ItemList;
