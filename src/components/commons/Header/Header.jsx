import React from "react";
import bg from "./bg-header.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__info">
          <h1>Aprende habilidades digitales para este nuevo mundo</h1>
          <p>
            Tenemos para ti diferentes cursos donde aprenderás lo necesario para
            triunfar en esta nueva era digital.{" "}
          </p>
          <a href="/#courses">Inscríbete ahora!</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
