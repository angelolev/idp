import React from "react";
import books from "./books.webp";
import meet from "./meet.webp";
import rocket from "./rocket.webp";

const AboutUs = () => {
  return (
    <section className="about-us">
      <header></header>
      <div className="about-us__content">
        <div className="container">
          <h2>
            Nuestra misión es enseñar y preparar a personas y empresas con
            nuevas habilidades digitales para esta nueva era de la información.
          </h2>
          <p>
            <strong>Innodesign</strong> nació hace 8 años, con el objetivo de
            desarrollar soluciones basadas en tecnología que automaticen y/o
            mejoren los procesos de nuestros clientes. Asimismo, venimos
            capacitando empresas públicas y privadas en tecnologías de la
            información y estrategias digitales.
          </p>
          <p>
            Queremos prepararte para este nuevo mundo digital, compartiendo el
            conocimiento que hemos adquirido durante estos años. Creemos que un
            curso en línea a veces no es suficiente, y por eso todos nuestros
            cursos incluyen una tutoría individual con nuestros instructores,
            para que puedas tener un seguimiento personal y resolver dudas y
            consultas enfocadas en tu proyecto o empresa.
          </p>
          <div className="about-us__list">
            <div className="about-us__item">
              <div className="item__image">
                <img src={books} alt="" />
              </div>

              <p>
                Nuestros cursos son <strong>específicos</strong>, centrados en
                un tema a resolver y sin rodeos.
              </p>
            </div>
            <div className="about-us__item">
              <div className="item__image">
                <img src={rocket} alt="" />
              </div>
              <p>
                Todos los cursos están{" "}
                <strong>basados en temas digitales</strong>, para que despegues
                en esta nueva era de la información.
              </p>
            </div>
            <div className="about-us__item">
              <div className="item__image">
                <img src={meet} alt="" />
              </div>
              <p>
                Tendrás <strong>sesiones privadas</strong> con los isnructores
                para que puedas hacer todas las consultas necesarias en tu
                formación digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
