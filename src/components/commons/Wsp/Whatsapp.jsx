import React from "react";

const Whatsapp = () => {
  return (
    <div className="whatsapp-cta">
      <a
        class="whatsapp-cta__mobile"
        target="_blank"
        href="https://wa.link/fkwizg"
      >
        <span className="icon icon-whatsapp"></span>
      </a>
      <a
        class="whatsapp-cta__desktop"
        target="_blank"
        href="https://web.whatsapp.com/send?phone=51975758095&text="
      >
        <span className="icon icon-whatsapp"></span>
      </a>
    </div>
  );
};

export default Whatsapp;
