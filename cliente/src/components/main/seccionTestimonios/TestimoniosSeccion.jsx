import React from "react";
import "./testimonios.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";

function Testimonios() {
  return (
    <section id="home" className="sectionc">
      <div className="container pt-5">
        <section className="testimonial container section">
          <h1 className="section__title" style={{ color: "white" }}>
            Mis pacientes
          </h1>
          <span className="section__subtitle" style={{ color: "white" }}>
            Algunos testimonios
          </span>
          <Swiper
            className="testimonial__container"
            loop={true}
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              // Cambia la cantidad de testimonios mostrados en diferentes tamaños de pantalla
              576: {
                slidesPerView: 2, // Mostrar 2 testimonios en pantallas de 576px o más
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2, // Mostrar 3 testimonios en pantallas de 768px o más
                spaceBetween: 48,
              },
              992: {
                slidesPerView: 3, // Mostrar 4 testimonios en pantallas de 992px o más
                spaceBetween: 48,
              },
              1500: {
                slidesPerView: 3, // Mostrar 4 testimonios en pantallas de 992px o más
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
      </div>
    </section>
  );
}

export default Testimonios;
