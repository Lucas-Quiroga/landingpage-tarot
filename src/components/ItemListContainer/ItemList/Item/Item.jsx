import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { UsuarioContexto } from "../../../context/UserProvider";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const Item = ({ item }) => {
  const { user, agregarUsu } = useContext(UsuarioContexto);
  // console.log("me traje " + user["nombre"]);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function cambiarName(params) {
    agregarUsu();
  }

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
      <br />
      <button onClick={agregarUsu}>touch me</button>
    </div>
  );
};

export default Item;
