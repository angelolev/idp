import React from "react";

const RecommendedCourse = (props) => {
  const { courseImage, courseName, students, link } = props;
  return (
    <a href={link}>
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
    </a>
  );
};

export default RecommendedCourse;
