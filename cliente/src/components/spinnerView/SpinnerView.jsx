import React from "react";
import "./spinnerView.css";

const SpinnerView = () => {
  return (
    <div className="overlay_spinner">
      <div className="sectionb-inner">
        <div class="loader">
          <span class="loader-text">Cargando...</span>
          <span class="load"></span>
        </div>
      </div>
    </div>
  );
};

export default SpinnerView;
