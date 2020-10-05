import React from "react";
import RecommendedCourse from "./RecommendedCourse";
import docentes from "./docentes.png";
import ecommerce from "./ecommerce.png";
import herramientas from "./herramientas-digitales.png";
import cm from "./cm.png";

const RecommendedCourses = () => {
  return (
    <>
      <RecommendedCourse
        courseName="Herramientas digitales para trabajo remoto"
        courseImage={herramientas}
        students="204"
        link="trabajo-remoto"
      />
      <RecommendedCourse
        courseName="Redes sociales para negocios"
        courseImage={cm}
        students="259"
        link="cm"
      />
      <RecommendedCourse
        courseName="Herramientas digitales para profesores"
        courseImage={docentes}
        students="320"
        link="docentes"
      />
      <RecommendedCourse
        courseName="Creando tu propia tienda online"
        courseImage={ecommerce}
        students="189"
        link="ecommerce"
      />
    </>
  );
};

export default RecommendedCourses;
