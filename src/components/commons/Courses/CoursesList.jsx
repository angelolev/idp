import React from "react";
import courseEcommerce from "./ecommerce.png";
import courseDigital from "./herramientas-digitales.png";
import courseSocial from "./cm.png";
import courseTeacher from "./docentes.png";
import CourseCard from "./CourseCard";

const CoursesList = () => {
  return (
    <section className="courses-list" id="courses">
      <h2>Nuestros cursos</h2>
      <p>
        Te presentamos los cursos disponibles para que empieces a ser parte de
        este nuevo mundo digital:
      </p>
      <div className="courses-list__list">
        <CourseCard
          image={courseEcommerce}
          link="ecommerce"
          title="Creando tu propia tienda online"
          description="Crearás tu propia tienda online. Aprenderás a administrar productos, hacer ofertas, cupones, configurar pasarelas de pago y publicar tu tienda desde el primer día."
        />
        <CourseCard
          image={courseDigital}
          link="trabajo-remoto"
          title="Herramientas digitales para trabajo remoto"
          description="Aprenderás las herramientas, técnicas y estrategias para operar desde casa sin perder productividad"
        />
        {/* <CourseCard
          image={courseSocial}
          link="cm"
          title="Redes sociales para negocios"
          description="Aprende a gestionar redes sociales profesionalmente. Crear contenidos disruptivos y automatizar publicaciones en Facebook e Instagram."
        />
        <CourseCard
          image={courseTeacher}
          link="docentes"
          title="Herramientas digitales para profesores"
          description="Moderniza y lleva tus clases al siguiente nivel, implementando herramientas remotas que te permitan ejecutar tus clases online"
        /> */}
      </div>
    </section>
  );
};

export default CoursesList;
