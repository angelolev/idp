import React from "react";
import logo from "./logo-white.svg";

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
          <a href="/">
            <span className="icon icon-instagram"></span>
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__menu">
          <ul>
            <li>
              <a href="/sobre-nosotros">Sobre nosotros</a>
            </li>
            <li>
              <a href="/#courses">Encuentra un curso</a>
            </li>
            <li>
              <a href="/como-funciona">Cómo funciona</a>
            </li>
            <li>
              <a href="/terminos">Términos de uso</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
