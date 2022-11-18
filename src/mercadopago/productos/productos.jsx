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
    payer: {
      name: "Juan",
      surname: "Lopez",
      email: "user@email.com",
      phone: {
        area_code: "11",
        number: "4444-4444",
      },
      identification: {
        type: "DNI",
        number: "12345678",
      },
      back_urls: {
        success: "https://www.success.com",
        failure: "http://www.failure.com",
        pending: "http://www.pending.com",
      },
    },
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
