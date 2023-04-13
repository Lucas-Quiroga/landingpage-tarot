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
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );

  next();
});

/**Configuramos el mercadopago */

mercadopago.configure({
  access_token:
    "TEST-2140410972376935-021421-1bee81f352b2a183b9faa175ae15555e-389487464",
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
      success: "http://localhost:3000/",
      failure: "http://localhost:3000/",
      pending: "https://pending.com",
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

/**
 * http://localhost:3000/?collection_id=1313488125&collection_status=approved&payment_id=1313488125&status=approved&external_reference=null&payment_type=credit_card&merchant_order_id=8315329879&preference_id=389487464-3dbd1a6d-c19e-45dd-95db-282580c84154&site_id=MLA&processing_mode=aggregator&merchant_account_id=null
 *
 */

/**
 * Tenes que hacer: 1-Crear una vista para cada estado de pago, 2- crear un back y bdd para guardar los datos con nodejs, panel de administracion
 *
 */
