import React, { useState, useEffect } from "react";
import "./SobreMi.css";

const SobreMi = () => {
  const [mobileReferencia, setMobileReferencia] = useState(false);

  useEffect(() => {
    const manejarResize = () => {
      setMobileReferencia(window.innerWidth <= 500);
    };

    manejarResize();
    window.addEventListener("resize", manejarResize);

    return () => {
      window.removeEventListener("resize", manejarResize);
    };
  }, []);

  return (
    <>
      <section id="about" className="sectionc h-100">
        <div className="overlay_a">
          <div
            className={`${
              mobileReferencia ? "sectionb-inner" : "section_sobremi"
            }`}
          >
            <h1>¡Un gusto!</h1>
            <div>
              <p>
                Soy Paula, tarotista y vidente. Desde pequeña, mis ojos veían
                cosas que los demás no podían observar. Con el paso de los años,
                las respuestas que necesitaba se me fueron revelando y hoy me
                han traído hasta aquí. El tarot marcó un antes y un después para
                mí. Las cartas se aferraron a mi mano, iluminando mi camino con
                ellas.
              </p>
              <br />
              <p>
                Desde el 2004, en mi escuela de conocimiento, inicié en los
                misterios, buscando mi expansión espiritual para entender y
                comprender las almas que me rodean. De esta forma, llegué al
                tarot como vehículo de luz, claridad y orientación. Mi meta es
                llegar a vos, a tu profundidad interior, y proporcionarte esa
                guía para que puedas fluir mejor y desatar lo que te desafía.
              </p>
              <br />
              <p>
                Acompáñame, siento tu energía, vamos a descubrir un nuevo
                capítulo...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SobreMi;
