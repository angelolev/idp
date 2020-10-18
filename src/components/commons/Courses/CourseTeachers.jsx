import React, { useState, useEffect } from "react";
import RecommendedCourses from "./RecommendedCourses";
import Session from "./CourseSession";
import Modal from "react-modal";
import FormSignUp from "../Forms/FormSignUp";
import instructor from "./i-angelo.jpg";
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
                  <span className="icon icon-time"></span> + 7 horas de clase +
                  tutoría individual
                </small>
                {/* <h4>Horarios</h4>
                <ul>
                  <li>Martes y Jueves 08:00PM - 09:00PM</li>
                  <li>Miercoles y Viernes 08:00PM - 09:00PM</li>
                </ul>
                <button onClick={toggleModal}>
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
                    <span>S/60 soles</span>
                  </li>
                  <li>Certificado Digital de participación</li>
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
                        name="G Suite para la educación"
                        duration="01:00"
                      />
                      <Session
                        name="Conociendo Google Classroom"
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
                        name="Crear y configurar una clase"
                        duration="01:00"
                      />
                      <Session
                        name="Invitar a sus alumnos a una clase"
                        duration="01:00"
                      />
                      <Session
                        name="Crear y compartir documentos"
                        duration="01:00"
                      />
                      <Session
                        name="Crear formularios como examen/encuesta"
                        duration="01:00"
                      />
                      <Session
                        name="Incluir materiales educativos: enlaces, archivos, imágenes y
                        videos"
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
                        name="Videollamadas: programando clases con google meet"
                        duration="01:00"
                      />
                      <Session
                        name="Videollamadas: aprendiendo a compartir pantalla,
                        pestaña o aplicación"
                        duration="01:00"
                      />
                      <Session
                        name="Videollamadas: conociendo las diferentes vistas de
                        Google Meet"
                        duration="01:00"
                      />
                      <Session
                        name="Classroom: Cómo crear tareas para estudiantes"
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
                        name="Retroalimentación de tareas o actividades de
                        aprendizaje"
                        duration="01:00"
                      />
                      <Session
                        name="Calificación de tareas o actividades"
                        duration="01:00"
                      />
                      <Session
                        name="Exportar calificaciones a un excel"
                        duration="01:00"
                      />
                      <Session
                        name="Reporte de calificaciones en PDF"
                        duration="01:00"
                      />
                      <Session
                        name="Kahoot para evaluar alumnos"
                        duration="01:00"
                      />
                    </div>
                  </div>
                  <div className="session__group">
                    <div className="group__title">
                      <h3>5. Extras</h3>
                    </div>
                    <div className="group__sessions">
                      <Session name="Grabador de pantalla" duration="01:00" />
                      <Session name="Captura de pantalla" duration="01:00" />
                      <Session
                        name="Anotaciones en pantalla para explicar tus clases"
                        duration="01:00"
                      />
                      <Session
                        name="Tutoría INDIVIDUAL con el instructor"
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
                      <h4>Angelo Leva</h4>
                      <p>
                        Ingeniero de software especialista en tecnologías web.
                        Desde el 2012 me dedico a desarrollar soluciones basadas
                        en tech y capacitar usuarios para múltiples
                        instituciones, tanto públicas como privadas.
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
