import React, { useState } from "react";
import ReactModal from "react-modal";
import bbva from "./bbva.jpg";
import bcp from "./bcp.png";
import interbank from "./interbank.png";
import plin from "./plin.png";
import yape from "./yape.png";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  ReactModal.setAppElement("#root");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal}>Open modal</button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="test"
        className="modal"
        overlayClassName="modal__overlay"
      >
        <div className="modal__content">
          <p>
            Tenemos para ti múltiples opciones disponibles para que puedas ser
            parte de esta nueva era digital:
          </p>
          <ul>
            <li>
              <img src={bbva} alt="" />
            </li>
            <li>
              <img src={bcp} alt="" />
            </li>
            <li>
              <img src={interbank} alt="" />
            </li>
            <li>
              <img src={plin} alt="" />
            </li>
            <li>
              <img src={yape} alt="" />
            </li>
          </ul>
          <button onClick={toggleModal}>Cerrar</button>
        </div>
      </ReactModal>
    </>
  );
};

export default Modal;
