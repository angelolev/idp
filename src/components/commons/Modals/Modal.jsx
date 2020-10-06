import React, { useState } from "react";
import ReactModal from "react-modal";

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
          <p>modal text</p>
          <button onClick={toggleModal}>Cerrar</button>
        </div>
      </ReactModal>
    </>
  );
};

export default Modal;
