import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Item = ({ item }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name.toUpperCase()}</Card.Title>
        <Card.Text>
          <span className="Information" style={{ textDecoration: "underline" }}>
            INFORMACIÓN:
          </span>
          <br />
          {item.information.toLowerCase()}
        </Card.Text>
        <Link to={`/servicios/informacion/${item.id}`}>
          <Button variant="primary">Ver detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
