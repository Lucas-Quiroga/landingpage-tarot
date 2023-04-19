import React, { useState, useEffect } from "react";
import SpinnerView from "../spinnerView/SpinnerView";
import Formulario from "./formulario/Formulario";

const Contacto = () => {
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 1000);
  }, []);

  return (
    <>
      {cargando ? (
        <SpinnerView />
      ) : (
        <div>
          Contacto
          <Formulario />
        </div>
      )}
    </>
  );
};

export default Contacto;
