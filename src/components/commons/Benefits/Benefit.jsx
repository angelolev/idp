import React from "react";

const Benefit = (props) => {
  const { image, title, description } = props;
  return (
    <div className="item">
      <div className="item__image">
        <img src={image} alt="" />
      </div>
      <div className="item__description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Benefit;
