import React, { useState, useContext } from "react";

const Contexto = React.createContext({});
const { Provider } = Contexto;
export const UsuarioContexto = () => useContext(Contexto);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("lucas");

  const nuevoUsuario = (e) => {
    const nombre = e.target.name;
    const valor = e.target.value;

    setUser((datosUsu) => ({ ...datosUsu, [nombre]: valor }));
  };

  return <Provider value={user}>{children}</Provider>;
};

export default UserProvider;
