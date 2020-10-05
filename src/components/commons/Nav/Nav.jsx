import React, { useState, useEffect } from "react";
import { auth } from "../../../services/firebase";
import logo from "./logo-white.svg";
import { getUserState } from "../../../utils/utils";

const Nav = () => {
  const [scroll, setScroll] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  let navClasses = "nav";

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  useEffect(() => {
    getUserState();
  });

  const showMenu = () => {
    let navMenu = document.getElementById("nav__menu");
    navMenu.classList.toggle("show");
  };

  const logOut = () => {
    auth.signOut().then(() => {
      console.log("salio");
    });
  };

  if (!scroll) {
    navClasses += " scrolled";
  }

  return (
    <nav className={navClasses}>
      <div className="nav__content">
        <div className="nav__left">
          <a href="/">
            <img src={logo} alt="Innodesign" />
          </a>
        </div>
        <div className="nav__right">
          <div className="nav__icon" onClick={showMenu}>
            <span className="icon icon-menu"></span>
          </div>
          <div className="nav__menu fadeIn" id="nav__menu">
            <ul>
              <li>
                <a href="/#courses">Cursos</a>
              </li>
              <li>
                <a href="/calendario">Calendario</a>
              </li>
            </ul>
            <ul>
              <li className="logged-in">
                <a onClick={logOut}>Salir</a>
              </li>
              <>
                <li className="logged-out">
                  <a href="/sign-in">Ingresar</a>
                </li>

                <li className="logged-out">
                  <a className="btn" href="/sign-up">
                    Regístrate gratis
                  </a>
                </li>
              </>
            </ul>
            <button className="nav__close" id="nav__close" onClick={showMenu}>
              X
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;