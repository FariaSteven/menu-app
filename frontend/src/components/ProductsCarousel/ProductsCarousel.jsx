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
        marginBottom: "30px",
      }}
    >
      <img
        src={plate}
        alt="Comida"
        width="100px"
        height="100px"
        style={{
          borderRadius: "50px",
          boxShadow: "0px 5px 8px 0px rgba(0, 0, 0, 0.2)",
          marginBottom: "-39px",
        }}
      />
      <div
        style={{
          padding: "45px 40px 20px 40px",
          boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.2)",
          borderRadius: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "1.8rem",
            textAlign: "center",
            color: "#3D3C45",
            fontWeight: "700",
          }}
        >
          Salada Ceasar
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
            margin: "15px 0px",
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              boxShadow: "1px 1px 8px 1px rgba(0, 0, 0, 0.2)",
              borderRadius: "20px",
              padding: "5px 10px",
            }}
          >
            Prato Principal
          </div>
          <div
            style={{
              boxShadow: "1px 1px 8px 1px rgba(0, 0, 0, 0.2)",
              borderRadius: "20px",
              padding: "5px 10px",
            }}
          >
            Salada
          </div>
        </div>
        <p
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            color: "#FF8D08",
          }}
        >
          R$
          <bold
            style={{
              fontSize: "2rem",
              textAlign: "center",
              color: "#FF8D08",
              fontWeight: "900",
            }}
          >
            15,90
          </bold>
        </p>
      </div>
    </div>
  );
};

const ProductsCarousel = () => {
  return (
    <>
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          color: "#FF844F",
          fontWeight: "900",
          padding: "30px",
        }}
      >
        Mais pedidos
      </h1>
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
        <SwiperSlide>
          <SwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductsCarousel;
