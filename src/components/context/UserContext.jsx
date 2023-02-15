import React, { useState, useContext } from "react";

const Context = React.createContext({});
const { Provider } = Context;
export const CartContext = () => useContext(Context);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});

  const datosUser = (e) => {
    setUser(e.target.value);
  };

  return <Provider value={{ datosUser, user }}>{children}</Provider>;
};

export default UserContext;
