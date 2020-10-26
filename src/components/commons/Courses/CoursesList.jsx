import React from "react";
import courseEcommerce from "./ecommerce.png";
import courseDigital from "./herramientas-digitales.png";
import courseSocial from "./cm.png";
import courseTeacher from "./docentes.png";
import courseTrello from './trello.jpg';
import courseCanva from './canva.jpg';
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
          status="available"
        />
        <CourseCard
          image={courseDigital}
          link="trabajo-remoto"
          title="Herramientas digitales para trabajo remoto"
          description="Aprenderás las herramientas, técnicas y estrategias para operar desde casa sin perder productividad"
          status="available"
        />
        <CourseCard
          image={courseSocial}
          link="cm"
          title="Redes sociales para negocios"
          description="Aprende a gestionar redes sociales profesionalmente. Crear contenidos disruptivos y automatizar publicaciones en Facebook e Instagram."
          status="unavailable"
        />
        <CourseCard
          image={courseTeacher}
          link="docentes"
          title="Herramientas digitales para docentes"
          description="Moderniza y lleva tus clases al siguiente nivel, implementando herramientas remotas que te permitan ejecutar tus clases online"
          status="available"
        />
        <CourseCard
          image={courseTrello}
          link="trello"
          title="Administración de actividades con Trello"
          description="Aprende a gestionar las tareas de tu equipo de trabajo de forma efectiva, ordenando objetivos en un tablero general para administrar, distribuir y hacer seguimiento de todas las actividades."
          status="unavailable"
        />
        <CourseCard
          image={courseCanva}
          link="taller-canva"
          title="Taller «Canva, diseños para el aula»"
          description="Crearás contenidos educativos como: diapositivas, banners, carteles, infografías. Esta aplicación permite trabajar con el alumnado en actividades que fomenten el aprendizaje creativo y colaborativo."
          status="unavailable"
        />
        {/* <CourseCard
          image={courseSocial}
          link="cm"
          title="Redes sociales para negocios"
          description="Aprende a gestionar redes sociales profesionalmente. Crear contenidos disruptivos y automatizar publicaciones en Facebook e Instagram."
          status="unavailable"
        />
        <CourseCard
          image={courseTeacher}
          link="docentes"
          title="Herramientas digitales para docentes"
          description="Moderniza y lleva tus clases al siguiente nivel, implementando herramientas remotas que te permitan ejecutar tus clases online"
          status="available"
        /> */}
      </div>
    </section>
  );
};

export default CoursesList;
