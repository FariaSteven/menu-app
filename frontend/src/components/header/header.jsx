import React from "react";
import "./header.scss";

import OrangeLogo from "../../assets/BigBiteLogoOrange.svg";
import Menu from "../../assets/Menu.svg";

import Button from "../button/button";

const Header = () => {
  return (
    <header>
      <img src={OrangeLogo} width="100px" alt="BigBite Logo Laranja" />
      <div>
        <Button text="Entrar" />
        <Button text="Cadastrar" outlined={true} />
        <img src={Menu} alt="BigBite Logo Laranja" />
      </div>
    </header>
  );
};

export default Header;
