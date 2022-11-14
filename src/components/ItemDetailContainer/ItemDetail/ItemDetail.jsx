import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ json }) => {
  return (
    <div>
      <div className="detailObjContainer" key={json.id}>
        <img src={json.img} alt="" />
        <div className="detailObjChildren">
          <h3>{json.name}</h3>
          <h4>Price: {json.price}</h4>
          <h4>Description: {json.information}</h4>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
