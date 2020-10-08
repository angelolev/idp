import React, { useEffect } from "react";
import item1 from "./item1.webp";
import item2 from "./item2.webp";
import item3 from "./item3.webp";

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="how-it-works">
      <header></header>
      <div className="container">
        <div className="how-it-works__content">
          <h2>Cómo funciona</h2>
          <div className="how-it-works__item">
            <div className="item__image">
              <img src={item1} alt="" />
            </div>
            <div className="item__description">
              <h3>Cada estudiante se inscribe en el curso que le gusta</h3>
              <p>
                Sin importar de qué rubro seas, nuestros cursos están destinados
                a personas con o sin experiencia digital. Aprenderás desde cero
                y paso a paso nuevas habilidades para un nuevo mundo.
              </p>
            </div>
          </div>
          <div className="how-it-works__item">
            <div className="item__image">
              <img src={item2} alt="" />
            </div>
            <div className="item__description">
              <h3>Pequeños grupos, gran aprendizaje</h3>
              <p>
                Las clases en Innodesign se dan por videollamada usando las
                plataformas Zoom/Meet, en grupos de máximo 10 estudiantes, para
                que realmente tengas un aprendizaje enfocado y seguimiento
                personal a tu proyecto por parte de los instructores.
              </p>
            </div>
          </div>
          <div className="how-it-works__item">
            <div className="item__image">
              <img src={item3} alt="" />
            </div>
            <div className="item__description">
              <h3>Tutoría individual para tu proyecto o negocio</h3>
              <p>
                Nuestros profesores son personas con experiencia en el rubro en
                el que comparten su conocimiento. Nos importa más los proyectos
                de los que han sido parte y cómo han impactado la industria
                digital, que cuántos certificados almacenados puedan tener.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
