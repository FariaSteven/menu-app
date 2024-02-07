import React, { useState } from "react";
import "./Header.scss";

import OrangeLogo from "../../assets/BigBiteLogoOrange.svg";
import WhiteLogo from "../../assets/BigBiteLogoWhite.svg";
import Menu from "../../assets/Menu.svg";
import MenuWhite from "../../assets/MenuWhite.svg";

import Button from "../Button/Button";

const Header = ({ scrollTop }) => {
  return (
    <header className={scrollTop > 0 && "header-scrolled"}>
      <img
        src={scrollTop > 0 ? WhiteLogo : OrangeLogo}
        width="100px"
        alt="BigBite Logo Laranja"
      />
      <div>
        <Button text="Entrar" scrollTop={scrollTop} />
        <Button text="Cadastrar" outlined={true} scrollTop={scrollTop} />
        <img
          src={scrollTop > 0 ? MenuWhite : Menu}
          style={{ fill: "red" }}
          alt="BigBite Logo Laranja"
        />
      </div>
    </header>
  );
};

export default Header;
