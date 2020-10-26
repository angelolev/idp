import React from "react";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  const { image, title, description, link, status } = props;
  return (
    <div className={`course-card ${status}`}>
      <Link to={`/cursos/${link}`}>
        <div className="course-card__image">
          <img src={image} alt="" />
          {status === 'unavailable' ? <span>Próximamente</span>: false}
        </div>
        <div className="course-card__description">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
