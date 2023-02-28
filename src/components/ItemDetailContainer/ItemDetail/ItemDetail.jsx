import React from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ json }) => {
  return (
    <div className="detailObjContainer" key={json.id}>
      <img src={json.img} alt="" />

      <h3>{json.name}</h3>
      <h4>Price: {json.price}</h4>
      <h4>Description: {json.information}</h4>
      <a href="https://wa.me/message/32XC2THZUMWCE1" target="_blank">
        <button>Solicitar servicio</button>
      </a>
    </div>
  );
};

export default ItemDetail;
