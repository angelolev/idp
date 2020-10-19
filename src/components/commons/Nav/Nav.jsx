import React, { useState, useEffect } from "react";
import { auth } from "../../../services/firebase";
import logo from "./logo-white.svg";
import { getUserState } from "../../../utils/utils";
import { Link } from "react-router-dom";

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

  // useEffect(() => {
  //   getUserState();
  // });

  const showMenu = () => {
    const navMenu = document.getElementById("nav__menu");
    navMenu.classList.toggle("show");
  };

  const closeMenu = () => {
    const navMenu = document.getElementById("nav__menu");
    navMenu.classList.remove("show");
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
          <Link to={`/`}>
            <img src={logo} alt="Innodesign" />
          </Link>
        </div>
        <div className="nav__right">
          <div className="nav__icon" onClick={showMenu}>
            <span className="icon icon-menu"></span>
          </div>
          <div className="nav__menu fadeIn" id="nav__menu" onClick={closeMenu}>
            <ul>
              <li>
                <a href="/#courses">Cursos</a>
              </li>
              <li>
                <Link to={`/calendario`}>Calendario</Link>
              </li>
            </ul>
            <ul className="nav__user">
              <li className="logged-in">
                <a onClick={logOut}>Salir</a>
              </li>
              <>
                <li className="logged-out">
                  <Link to={`/sign-in`}>Ingresar</Link>
                </li>

                <li className="logged-out">
                  <Link className="btn" to={`/sign-up`}>
                    Regístrate gratis
                  </Link>
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
