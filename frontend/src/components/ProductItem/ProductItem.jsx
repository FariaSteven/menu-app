import React from "react";
import plate from "../../assets/plate.jpeg";
import "./ProductItem.scss";

const ProductItem = () => {
  return (
    <div className="product-item">
      <img className="product-image" src={plate} alt="Comida" />
      <div className="product-details">
        <h1 className="product-title">Salada Ceasar</h1>
        <div className="category-tags">
          <div className="tag">Prato Principal</div>
          <div className="tag">Salada</div>
        </div>
        <p className="product-price">
          R$
          <span className="price-amount">15,90</span>
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
