import React, { useState, useEffect } from "react";
import RecommendedCourses from "./RecommendedCourses";
import Session from "./CourseSession";
import Modal from "react-modal";
import FormSignUp from "../Forms/FormSignUp";
import instructor from "./dei.jpg";
import bbva from "./bbva.jpg";
import bcp from "./bcp.png";
import interbank from "./interbank.png";
import plin from "./plin.png";
import yape from "./yape.png";

const CourseTeacher = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [isOpen, setIsOpen] = useState(false);

  Modal.setAppElement("#root");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const { name, description, image } = props;

  return (
    <>
      <section className="course">
        <div className="course__banner docentes">
          <div className="container">
            <div className="banner__content">
              <div className="course__image">
                {/* <img src={courseImage} alt="" /> */}
                <FormSignUp />
                <a onClick={toggleModal}>Ver opciones de pago</a>
              </div>
              <div className="course__description">
                <h1>Herramientas digitales para docentes</h1>
                <p>
                  Aprenderás a utilizar diversas herramientas digitales para
                  gestionar toda la actividad de tus alumnos de manera virtual.
                </p>
                <small>
                  <span className="icon icon-user"></span> 131 inscritos
                </small>
                <small>
                  <span className="icon icon-time"></span> 05 días | + 8 horas
                  de clase | Asesoría individual
                </small>
                <h4>Horarios</h4>
                <ul>
                  <li>Lunes a Viernes 08:00 PM</li>
                  <li>Lunes, Miércoles y Viernes 09:30 PM</li>
                  <li>Sábado 10:00 AM</li>
                </ul>
                {/* <button onClick={toggleModal}>
                  Cómpralo ahora por S/50.00
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="course__info">
          <div className="container">
            <div className="course__top">
              <div className="course__presentation has-shadow">
                <p>
                  Este curso te brindará el conocimiento necesario en diversas
                  herramientas digitales para la producción de material
                  educativo y potenciar tu trabajo en el aula.
                </p>
                <p>
                  Conocerás características que aun no explotas de herramientas
                  como Gmail, Zoom, Meet, Formulario de Google, Google Drive,
                  Kahoot, Typeform, Google Classroom entre otras.
                </p>
                <p>
                  El objetivo fundamental del curso es capacitar al docente en
                  las habilidades, destrezas y conocimientos digitales para
                  favorecer la integración de las TIC en la dinámica diaria del
                  aula.
                </p>

                <h2>Metodología</h2>
                <ul>
                  <li>Tutor personal</li>
                  <li>Metodología 100% virtual</li>
                  <li>Clases en vivo</li>
                </ul>

                <h2>Lo que aprenderás</h2>
                <ul>
                  <li>Integrar recursos digitales en tu práctica docente.</li>
                  <li>
                    Conocerás herramientas digitales que puedes usar para
                    trabajar con tus alumnos.
                  </li>
                  <li>Buscar, compartir y almacenar recursos educativos.</li>
                  <li>Integrar herramientas de comunicación digital.</li>
                </ul>

                <h2>Inversión</h2>
                <ul className="price">
                  <li>
                    <span>S/100 soles</span>
                    <span>S/50 soles</span>
                  </li>
                  <li>Certificado Digital de participación por 150 horas</li>
                </ul>
              </div>
            </div>
            <div className="course__bottom">
              <div className="course__sessions has-shadow">
                <h2>Estas son las clases</h2>
                <div className="sessions__list">
                  <div className="session__group">
                    <div className="group__title">
                      <h3>
                        1. Primeros pasos con herramientas digitales para la
                        educación
                      </h3>
                    </div>
                    <div className="group__sessions">
                      <Session name="Presentación del curso" duration="01:00" />
                      <Session
                        name="Integración de las TIC en el aula"
                        duration="01:00"
                      />
                      <Session
                        name="Herramientas de Google para la educación (Classroom, Drive, Keep, Forms)"
                        duration="01:00"
                      />
                    </div>
                  </div>
                  <div className="session__group">
                    <div className="group__title">
                      <h3>2. Creación y publicación de contenidos</h3>
                    </div>
                    <div className="group__sessions">
                      <Session
                        name="Aprende a utilizar Trello como organizador y planeador de clases"
                        duration="01:00"
                      />
                      <Session
                        name="Usando Canva para crear infografías y contenido"
                        duration="01:00"
                      />
                      <Session
                        name="Crear y compartir documentos con Drive"
                        duration="01:00"
                      />
                    </div>
                  </div>
                  <div className="session__group">
                    <div className="group__title">
                      <h3>3. Comunicación y trabajo colaborativo</h3>
                    </div>
                    <div className="group__sessions">
                      <Session
                        name="Videollamadas: conociendo Zoom y Google Meet"
                        duration="01:00"
                      />
                      <Session
                        name="Videollamadas: aprendiendo a compartir pantalla,
                        pestaña o aplicación"
                        duration="01:00"
                      />
                      <Session
                        name="Videollamadas: conociendo las distintas formas de comunicarnos con nuestros alumnos"
                        duration="01:00"
                      />
                    </div>
                  </div>
                  <div className="session__group">
                    <div className="group__title">
                      <h3>4. Evaluación del aprendizaje del alumno</h3>
                    </div>
                    <div className="group__sessions">
                      <Session
                        name="Kahoot como motivación y evaluación de los alumnos"
                        duration="01:00"
                      />
                      <Session
                        name="Creando exámenes con Google Forms"
                        duration="01:00"
                      />
                    </div>
                  </div>
                  <div className="session__group">
                    <div className="group__title">
                      <h3>5. Extras</h3>
                    </div>
                    <div className="group__sessions">
                      <Session
                        name="Aprende a grabar tu clase"
                        duration="01:00"
                      />
                      <Session
                        name="Aprende a usar Jamboard como pizarra interactiva"
                        duration="01:00"
                      />

                      <Session
                        name="Asesoría INDIVIDUAL con el instructor"
                        duration="01:00"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="course__extras">
                <div className="extras__content">
                  <div className="extras__instructor has-shadow">
                    <h2>Instructor</h2>
                    <div className="instructor__image">
                      <img src={instructor} alt="" />
                    </div>
                    <div className="instructor__info">
                      <h4>Deibbie Muñante</h4>
                      <p>
                      MBA, Comunicador Social y docente universitario, especialista en herramientas digitales de vanguardia. Con conocimientos y experiencia de más de 10 años en marketing, dirección estratégica y finanzas.
                      </p>
                    </div>
                  </div>
                  <div className="extras__requirements has-shadow">
                    <h2>Requisitos previos</h2>
                    <ul>
                      <li>Ninguno</li>
                    </ul>
                  </div>
                  <div className="extras__features">
                    <h2>Continúa aprendiendo</h2>
                    <RecommendedCourses />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="test"
        className="modal"
        overlayClassName="modal__overlay"
      >
        <div className="modal__content">
          <p>
            Tenemos para ti múltiples opciones disponibles para que puedas ser
            parte de esta nueva era digital:
          </p>
          <ul>
            <li>
              <img src={bbva} alt="" />
            </li>
            <li>
              <img src={bcp} alt="" />
            </li>
            <li>
              <img src={interbank} alt="" />
            </li>
            <li>
              <img src={plin} alt="" />
            </li>
            <li>
              <img src={yape} alt="" />
            </li>
          </ul>
          <p>
            También puedes <b>pagar en un link con VISA</b>, escríbenos para
            ayudarte!
          </p>
          <p>
            Elige la que más se acomode a ti y cuéntanos cuál es para poder
            ayudarte a realizar el pago.
          </p>
          <button onClick={toggleModal}>Cerrar</button>
        </div>
      </Modal>
    </>
  );
};

export default CourseTeacher;
