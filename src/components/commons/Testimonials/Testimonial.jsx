import React from "react";

const Testimonial = (props) => {
  const { name, image, text } = props;
  return (
    <div className="item">
      <div className="item__header"></div>
      <div className="item__content">
        <div className="item__image">
          <img src={image} alt="" />
        </div>
        <div className="item__description">
          <h4>{name}</h4>
          <cite>{text}</cite>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
