import React, { useEffect } from "react";

import Button from "../../components/Button/Button";
import ProductsCarousel from "../../components/ProductsCarousel/ProductsCarousel";
import Testimonial from "../../components/Testimonial/Testimonial";

import "./Landing.scss";

const Landing = ({ setScrollTop }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrollTop(window.pageYOffset)
      );
    }
  }, []);

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
      <h1 className="title">Mais pedidos</h1>
      <ProductsCarousel />
      <h1>Avaliações</h1>
      <Testimonial />
    </div>
  );
};

export default Landing;
