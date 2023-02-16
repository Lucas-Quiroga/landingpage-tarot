import React, { useState, useContext } from "react";
import "./FormUser.css";
import { UserContextGlobal } from "../context/UserContext";

const FormUser = () => {
  const [datosDelUsuario, setDatosDelUsuario] = useState({});

  const { user, nuevoUsuario } = UserContextGlobal();

  // function tomarValores(e) {
  //   const nombre = e.target.name;
  //   const valor = e.target.value;

  //   setDatosDelUsuario((datosUsu) => ({ ...datosUsu, [nombre]: valor }));
  // }

  function enviarDatosFormulario(e) {
    e.preventDefault();
    // console.log("comprador " + JSON.stringify(datosDelUsuario));
  }

  return (
    <div className="card-form-container">
      <form onSubmit={enviarDatosFormulario}>
        <div className="card__form">
          <span className="card__title__form">Subscribe</span>
          <p className="card__content__form">
            Get fresh web design resources delivered straight to your inbox
            every week.
          </p>
          <div className="card__form">
            <input
              placeholder="Escriba su nombre"
              type="text"
              name="nombre"
              onChange={nuevoUsuario}
            />
          </div>
          <div className="card__form">
            <input
              placeholder="Escriba su email"
              type="email"
              name="email"
              onChange={nuevoUsuario}
            />
          </div>
          <div className="card__form">
            <input
              placeholder="Repita su email"
              type="email"
              name="email"
              onChange={nuevoUsuario}
            />
          </div>
          <div className="card__form">
            <input
              placeholder="Escriba su telefono"
              type="number"
              name="telefono"
              onChange={nuevoUsuario}
            />
          </div>
          <button className="sign-up" type="submit">
            Finalizar en MercadoPago
          </button>
        </div>
      </form>
      <h1>{user}</h1>
    </div>
  );
};

export default FormUser;
