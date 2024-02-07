import React from "react";
import "./SideMenu.scss";
import Close from "../../assets/Exit.svg";
import Button from "../Button/Button";

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`side-menu ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={onClose}>
        <img src={Close} alt="Fechar menu" />
      </button>
      <div className="menu-content">
        <ul className="menu-items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/cardapio">Cardápio</a>
          </li>
          <li>
            <a href="/">Reservar</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
        </ul>
        <div>
          <Button text="Entrar" link="/login" />
          <Button text="Cadastrar" outlined={true} link="/cadastro" />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
