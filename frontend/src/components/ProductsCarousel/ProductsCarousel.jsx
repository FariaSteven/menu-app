import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import plate from "../../assets/plate.jpeg";

import "swiper/css";
import "swiper/css/navigation";

import "./ProductsCarousel.scss";

const SwiperItem = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
      <div style={{ borderRadius: "50px" }}>
        <img src={plate} alt="Comida" width="100px" height="100px"/>
      </div>
      <div
        style={{
          width: "300px",
          height: "300px",
          boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1>Salada Ceasar</h1>
        <h1>Tags</h1>
        <h1>Preço</h1>
      </div>
    </div>
  );
};

const ProductsCarousel = () => {
  return (
    <Swiper
      style={{
        width: "100%",
        fontSize: "4rem",
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      >
        <SwiperItem />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductsCarousel;
