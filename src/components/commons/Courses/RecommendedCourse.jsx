import React from "react";
import { Link } from "react-router-dom";

const RecommendedCourse = (props) => {
  const { courseImage, courseName, students, link } = props;
  return (
    <Link to={link}>
      <div className="recommended__course">
        <div className="course__image">
          <img src={courseImage} alt="" />
        </div>
        <div className="course__title">
          <p>{courseName}</p>
          <p>
            <span className="icon icon-user"></span> {students} inscritos
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecommendedCourse;
