import React from "react";
import logo from "./logo-white.svg";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__top">
        <div className="footer__logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer__social">
          <a target="_blank" href="https://www.facebook.com/innodesign.pe">
            <span className="icon icon-facebook"></span>
          </a>
          <a target="_blank" href="https://www.instagram.com/innodesign.pe/">
            <span className="icon icon-instagram"></span>
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__menu">
          <ul>
            <li>
              <Link to={`/sobre-nosotros`}>Sobre nosotros</Link>
            </li>
            <li>
              <a href="/#courses">Encuentra un curso</a>
            </li>
            <li>
              <Link to={`/como-funciona`}>Cómo funciona</Link>
            </li>
            <li>
              <Link to={`/terminos`}>Términos de uso</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
