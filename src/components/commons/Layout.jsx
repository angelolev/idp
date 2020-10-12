import React from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Whatsapp from "./Wsp/Whatsapp";

const Layout = ({ children }) => (
  <div className="app">
    <Nav />
    {children}
    <Whatsapp />
    <Footer />
  </div>
);

export default Layout;
