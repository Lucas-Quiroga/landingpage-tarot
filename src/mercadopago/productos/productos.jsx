import React from "react";

const productos = () => {
  // Crea un objeto de preferencia
  let preference = {
    items: [
      {
        title: "Mi curso",
        unit_price: parseInt(100 * 1.15),
        quantity: 1,
        description: "lorem",
      },
    ],
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
    })
    .catch(function (error) {
      console.log(error);
    });

  return <div>productos</div>;
};

export default productos;
