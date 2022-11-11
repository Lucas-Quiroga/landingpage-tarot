import React from "react";

const Item = ({ item }) => {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <h4>Price: {item.price}</h4>
      <h4>Information: {item.information}</h4>
      <h3>Modality: {item.modality}</h3>
    </div>
  );
};

export default Item;
