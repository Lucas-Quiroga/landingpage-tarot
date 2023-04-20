import React, { useState, useEffect } from "react";
import SpinnerView from "../spinnerView/SpinnerView";
import Formulario from "./formulario/Formulario";
import Footer from "./../footer/Footer";

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
        <section>
          <div className="overlay_formulario">
            <div>
              Contacto
              <Formulario />
              <Footer />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Contacto;
