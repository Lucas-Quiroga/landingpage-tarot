import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="card">
      <h3 className="card-title">{item.name}</h3>
      <img src={item.img} alt="" width={400} />
      <h4>Price: {item.price}</h4>
      <h4 className="Information">Information: {item.information}</h4>
      <h3>Modality: {item.modality}</h3>
      <Link to={`/servicios/${item.id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  );
};

export default Item;
