import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import plate from "../../assets/plate.jpeg";

import "swiper/css";
import "swiper/css/navigation";

import "./ProductsCarousel.scss";

const SwiperItem = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "1.5rem",
        marginBottom: "30px"
      }}
    >
      <img
        src={plate}
        alt="Comida"
        width="100px"
        height="100px"
        style={{
          borderRadius: "50px",
          boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
          marginBottom: "-39px",
        }}
      />
      <div
        style={{
          padding: "50px 10px",
          boxShadow: "2px 12px 12px 4px rgba(0, 0, 0, 0.2)",
          borderRadius: "20px"
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          Salada Ceasar
        </h1>
        <h1
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          Tags
        </h1>
        <h1
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          Preço
        </h1>
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
        padding: "30px"
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
      <SwiperSlide>
        <SwiperItem />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperItem />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductsCarousel;
