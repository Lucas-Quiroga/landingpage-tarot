const express = require("express");
const morgan = require("morgan");
const mercadopago = require("mercadopago");
const { response } = require("express");
require("dotenv").config();

/**
 * Creamos el servidor
 */
const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  next();
});

/**Configuramos el mercadopago */

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN,
});

/**
 * En el post le vamos a mandar toda la información de las cartas
 */
server.post("/payment", (req, res) => {
  //El producto va a venir de la request del body
  const producto = req.body;
  let preference = {
    // The data of the item that the user has to pay for * REQUIRED
    items: [
      {
        id: 123,
        title: producto.curso,
        description: producto.descripcion,
        picture_url: producto.img,
        quantity: 1,
        currency_id: "ARS",
        category_id: "art",
        unit_price: producto.precio,
      },
    ],
    back_urls: {
      success: "http://localhost:3000",
      failure: "",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };
  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(400).send({ error: error.message }));
});

server.listen(3001, () => {
  console.log("Server is running on port: 3001");
});
