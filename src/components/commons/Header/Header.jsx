import React from "react";
import { HashLink } from "react-router-hash-link";

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
          {/* <a href="/#courses">Inscríbete ahora!</a> */}
          <HashLink to="/#courses">Inscríbete ahora!</HashLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
