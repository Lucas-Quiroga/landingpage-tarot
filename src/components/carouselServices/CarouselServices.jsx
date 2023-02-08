import React, { useState } from "react";
import "./Carousel.css";
import servicesJson from "./servicesJson.json";

const CarouselServices = () => {
  const [slider, setSlider] = useState(servicesJson[0]);

  const handleClick = (index) => {
    const sliderMove = servicesJson[index];
    setSlider(sliderMove);
  };

  return (
    <div className="carouselapp">
      <img src={slider.img} height="300" width="500" />
      <div className="flex_row">
        {servicesJson.map((data, i) => (
          <div className="thumbnail" key={i}>
            <img
              className={slider.id === i ? "clicked" : ""}
              src={data.img}
              key={data.id}
              onClick={() => handleClick(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselServices;
