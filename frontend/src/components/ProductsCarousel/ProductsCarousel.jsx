import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./ProductsCarousel.scss";
import ProductItem from "../ProductItem/ProductItem";

const ProductsCarousel = () => {
  return (
    <Swiper
      className="swiper-container"
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
        <ProductItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductsCarousel;
