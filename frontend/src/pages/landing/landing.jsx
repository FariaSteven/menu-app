import React from "react";
import "./Landing.scss";
import Button from "../../components/Button/Button";
import ProductsCarousel from "../../components/ProductsCarousel/ProductsCarousel";
import Testimonial from "../../components/Testimonial/Testimonial";

const Landing = () => {
  return (
    <div className="container">
      <h4>
        Bem vindo(a). Esse é o cardápio da <bold>BigBite</bold>. Aqui você vai
        encontrar todos os nossos pratos
      </h4>
      <div className="buttons-container">
        <Button text="Ver cardápio" />
        <Button text="Reservar" outlined={true} />
      </div>
      <ProductsCarousel />
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          color: "#FF844F",
          fontWeight: "900",
          padding: "30px",
        }}
      >
        Avaliações
      </h1>
      <Testimonial/>
    </div>
  );
};

export default Landing;
