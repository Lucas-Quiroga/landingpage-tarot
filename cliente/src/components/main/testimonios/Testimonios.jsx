import React from "react";
import "./testimonios.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";

function Testimonios() {
  return (
    <section className="testimonial container section">
      <h1 className="section__title" style={{ color: "white" }}>
        Mis pacientes
      </h1>
      <span className="section__subtitle">Testimonios</span>
      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        slidesPerView={2}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonios;

{
  /* <div key={id} className="testimonial__card">
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p
                className="testimonial__description"
                style={{ color: "black" }}
              >
                {description}
              </p>
            </div> */
}
