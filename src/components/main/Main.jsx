import React from "react";
import "./main.css";
import cartas from "./../main/cartas.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <section id="home" className="sectiona">
        <div className="container">
          <div>
            <h1 className="container__h1">Hola, soy Paula Dominguez</h1>
            <p>
              Let the MADNESS begin! Never let good enough BE enough! Hard work
              beats talent when talent doesn't work hard. Winning is a habit,
              Success is a choice. With this slogan, we look forward to provide
              you every sort of Ball Equipments, that too, the BEST.
            </p>
            <Link to={"/sobreMi"} className="btn">
              Read More
            </Link>
          </div>
          <img id="header-img" src={cartas} alt="cartas" />
        </div>
      </section>

      <section id="about" className="sectionb">
        <div className="overlay">
          <div className="sectionb-inner">
            <h3>Swish all em Threes</h3>
            <h2>Just Get Down Hooping On the Court</h2>
            <p>
              From A Basketball to Shooting Sleeves, everything you need - As a
              beginner, amateur or a pro - The one stop Ball solution for every
              baller.
              <br />
              Visit your nearest SamiHoops store today!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
