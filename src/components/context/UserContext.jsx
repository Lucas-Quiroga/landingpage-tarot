import React, { useState, useContext } from "react";

const Context = React.createContext({});
export const UserContextGlobal = () => useContext(Context);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  console.log(user);

  const nuevoUsuario = (e) => {
    const nombre = e.target.name;
    const valor = e.target.value;

    setUser((datosUsu) => ({ ...datosUsu, [nombre]: valor }));
    console.log("comprador " + JSON.stringify(user));
  };

  console.log(user);

  return (
    <UserContextGlobal.Provider value={{ nuevoUsuario, user }}>
      {children}
    </UserContextGlobal.Provider>
  );
};

export default UserContext;
