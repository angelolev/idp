import React from "react";

const Whatsapp = () => {
  return (
    <div className="whatsapp-cta">
      <a
        className="whatsapp-cta__mobile"
        target="_blank"
        href="https://wa.link/fkwizg"
      >
        <span className="icon icon-whatsapp"></span>
      </a>
      <a
        className="whatsapp-cta__desktop"
        target="_blank"
        href="https://web.whatsapp.com/send?phone=51975758095&text="
      >
        <span className="icon icon-whatsapp"></span>
      </a>
    </div>
  );
};

export default Whatsapp;
