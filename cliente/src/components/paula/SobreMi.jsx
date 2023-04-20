import React from "react";
import "./SobreMi.css";
import Footer from "./../footer/Footer";
import iconoweb from "./../../assets/iconomadre.png";

const SobreMi = () => {
  return (
    <>
      <section id="about" className="sectionc">
        <div className="overlay_a">
          <div className="sectionb-inner">
            <h2>Hola!</h2>
            <p>
              Soy Paula tarotista y vidente, desde chiquita mis ojos veían cosas
              que los demás no podian observar. Con el paso de los años se me
              fueron revelando las respuestas que necesitaba y hoy me trajeron
              hasta aca. El tarot marco un antes y un despúes para mi. Las
              cartas se pegaron a mi mano almorazando mi camino con ellas.
            </p>
            <br />
            Desde el 2004, en mi escuela de conocimiento inicie en los
            misterios, buscando mi expansión espiritual para entender y
            comprender las almas que me rodean. De esta forma llegue al tarot
            como vehiculo de luz, clarificador y orientador.
            <br />
            Mi meta es llegar a vos o tu profundidad interior y aportarte esa
            guía para que puedas fluir mejor y desanudar lo que te desafie.
            <br />
            Acompañame, siento tu energia, vamos a descubrir un nuevo
            capitulo...
          </div>
        </div>
        {/* <div className="imagendiv">
        <img src={iconoweb} alt="" srcset="" className="imgmadre" />
      </div> */}
      </section>
      <Footer />
    </>
  );
};

export default SobreMi;
