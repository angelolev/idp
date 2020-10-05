import React from "react";
import Testimonial from "./Testimonial";
import person1 from "./milagros.jpg";
import person2 from "./dei.jpg";
import person3 from "./mili.jpg";
import person4 from "./cristian.jpg";
import person5 from "./angelo.jpg";
import person6 from "./ives.jpg";
import person7 from "./victor.jpg";
import person8 from "./carlos.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Experiencias</h2>
      <div className="testimonials__list">
        <Testimonial
          image={person1}
          name="Milagros Roque"
          text="Gracias a Innodesign pude crear la tienda online de mi negocio. Ahora vendo más por este medio que por el tradicional."
        />
        <Testimonial
          image={person2}
          name="Deibbie Muñante"
          text="Comencé con el curso de herramientas digitales para docentes y me enganché enseguida!"
        />
        <Testimonial
          image={person7}
          name="Mario Postigo"
          text="No son sólo cursos, las tutorías individuales son increíbles!"
        />
        <Testimonial
          image={person3}
          name="Lucía Enriquez"
          text="Las mentorías individuales en temas de e-commerce me han ayudado a crecer mi negocio en Internet."
        />
        <Testimonial
          image={person4}
          name="Jorge Aguilar"
          text="Siempre le tuve miedo a internet. Pero luego del curso entendí que estuve perdiendo tiempo y dinero al no entrar antes al mundo digital."
        />
        <Testimonial
          image={person5}
          name="Luciano Roque"
          text="Con la pandemia me vi obligado a aprender nuevas formas de enseñar. En Innodesign encontré la mejor guía para entender la nueva era de la información."
        />
        <Testimonial
          image={person6}
          name="Alejandro Vizcarra"
          text="Mi negocio tuvo que pivotear la forma de las ventas. Llevé un curso aquí y entendí cómo es que funciona el ecommerce."
        />
        <Testimonial
          image={person8}
          name="Roberto Espinoza"
          text="Como docente aprendí a utilizar muchas herramientas que desconocía"
        />
      </div>
    </section>
  );
};

export default Testimonials;
