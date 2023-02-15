import React, { useState } from "react";
import "./FormUser.css";

const FormUser = () => {
  const [datosDelUsuario, setDatosDelUsuario] = useState({});

  function tomarValores(e) {
    const nombre = e.target.name;
    const valor = e.target.value;

    setDatosDelUsuario((datosUsu) => ({ ...datosUsu, [nombre]: valor }));
  }

  function enviarDatosFormulario(e) {
    e.preventDefault();
    console.log("comprador " + JSON.stringify(datosDelUsuario));
  }

  return (
    <div className="card-form-container">
      <form onSubmit={enviarDatosFormulario}>
        <div class="card__form">
          <span class="card__title__form">Subscribe</span>
          <p class="card__content__form">
            Get fresh web design resources delivered straight to your inbox
            every week.
          </p>
          <div class="card__form">
            <input
              placeholder="Escriba su nombre"
              type="text"
              name="nombre"
              onChange={tomarValores}
            />
          </div>
          <div class="card__form">
            <input placeholder="Escriba su email" type="email" name="email" />
          </div>
          <div class="card__form">
            <input placeholder="Repita su email" type="email" name="email" />
          </div>
          <div class="card__form">
            <input
              placeholder="Escriba su telefono"
              type="number"
              name="telefono"
            />
          </div>
          <button class="sign-up" type="submit">
            Finalizar en MercadoPago
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUser;
