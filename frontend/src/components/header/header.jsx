import React, { useState } from "react";
import "./Header.scss";

import OrangeLogo from "../../assets/BigBiteLogoOrange.svg";
import WhiteLogo from "../../assets/BigBiteLogoWhite.svg";
import Menu from "../../assets/Menu.svg";
import MenuWhite from "../../assets/MenuWhite.svg";

import Button from "../Button/Button";
import SideMenu from "../SideMenu/SideMenu";

const Header = ({ scrollTop, isMenuOpen, setMenuOpen }) => {

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={scrollTop > 0 && "header-scrolled"}>
      <img
        src={scrollTop > 0 ? WhiteLogo : OrangeLogo}
        width="100px"
        alt="BigBite Logo Laranja"
      />
      <div>
        <Button text="Entrar" scrollTop={scrollTop} link="/login"/>
        <Button text="Cadastrar" outlined={true} scrollTop={scrollTop} link="/cadastro" />
        <img
          src={scrollTop > 0 ? MenuWhite : Menu}
          alt="BigBite Logo Laranja"
          onClick={() => setMenuOpen(true)}
        />
        <SideMenu isOpen={isMenuOpen} onClose={handleMenuToggle} />
      </div>
    </header>
  );
};

export default Header;
