import React, { useState, createContext } from "react";
import FormUser from "../formUserMercadopago/FormUser";

export const UsuarioContexto = createContext();
const { Provider } = UsuarioContexto;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  function agregarUsu(params) {
    console.log("esta funcion agrega al usuario");
  }

  const nuevoUsuario = (e) => {
    const nombre = e.target.name;
    const valor = e.target.value;

    setUser((datosUsu) => ({ ...datosUsu, [nombre]: valor }));
    console.log(user);
  };

  return (
    <Provider value={{ user, nuevoUsuario, agregarUsu }}>{children}</Provider>
  );
};

export default UserProvider;
