import React, { useState, useContext } from "react";
import "./FormUser.css";
import { UsuarioContexto } from "../context/UserProvider";

const FormUser = () => {
  // const [datosDelUsuario, setDatosDelUsuario] = useState({});
  // const [usuario, setUsuario] = useState({});

  const user = useContext(usuarioContexto);

  // const datos = {
  //   comprador: {
  //     nombre: usuario.name,
  //     email: usuario.email,
  //     telefono: usuario.telefono,
  //   },
  // };

  function enviarDatosFormulario(e) {
    e.preventDefault();
  }

  return (
    <UsuarioContexto.Consumer>
      <div className="card-form-container">
        <form onSubmit={enviarDatosFormulario}>
          <div className="card__form">
            <span className="card__title__form">Subscribe</span>
            <p className="card__content__form">
              Get fresh web design resources delivered straight to your inbox
              every {user} asweek.
            </p>
            <div className="card__form">
              <input
                placeholder="Escriba su nombre"
                type="text"
                name="nombre"
                // onChange={nuevoUsuario}
              />
            </div>
            {/* <div className="card__form">
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
          </div> */}
            <button className="sign-up" type="submit">
              Finalizar en MercadoPago
            </button>
          </div>
        </form>
        {/* <button onClick={saludo}>saludame</button>
      <h1>{user}</h1> */}
      </div>
    </UsuarioContexto.Consumer>
  );
};

export default FormUser;
