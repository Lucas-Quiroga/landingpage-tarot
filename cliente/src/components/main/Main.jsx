import React from "react";
import BienvenidaSeccion from "./seccionBienvenida/BienvenidaSeccion";
import FraseSeccion from "./seccionFrase/FraseSeccion";
import TestimoniosSeccion from "./seccionTestimonios/TestimoniosSeccion";
import "./main.css";

const Main = () => {
  return (
    <>
      <BienvenidaSeccion />
      <FraseSeccion />
      <TestimoniosSeccion />
    </>
  );
};

export default Main;
