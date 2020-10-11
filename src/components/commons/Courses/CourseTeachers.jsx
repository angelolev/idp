import React, { useState, useEffect } from "react";
import RecommendedCourses from "./RecommendedCourses";
import Modal from "react-modal";
import FormSignUp from "../Forms/FormSignUp";
import instructor from "./i-angelo.jpg";

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
                <h4>Horarios</h4>
                <ul>
                  <li>Martes y Jueves 08:00PM - 09:00PM</li>
                  <li>Miercoles y Viernes 08:00PM - 09:00PM</li>
                </ul>
                <button onClick={toggleModal}>
                  Cómpralo ahora por S/50.00
                </button>
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
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span>{" "}
                            Presentación del curso
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span>{" "}
                            Integración de las TIC en el aula
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> G Suite
                            para la educación
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span>{" "}
                            Conociendo Google Classroom
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="session__group">
                    <div className="group__title">
                      <h3>2. Creación y publicación de contenidos</h3>
                    </div>
                    <div className="group__sessions">
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> Crear y
                            configurar una clase
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> Invitar a
                            sus alumnos a una clase
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> Crear y
                            compartir documentos
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span>Crear
                            formularios como examen/encuesta
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span>Incluir
                            materiales educativos: enlaces, archivos, imágenes y
                            videos
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="session__group">
                    <div className="group__title">
                      <h3>3. Comunicación y trabajo colaborativo</h3>
                    </div>
                    <div className="group__sessions">
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span>{" "}
                            Videollamadas: programando clases con google meet
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span>{" "}
                            Videollamadas: aprendiendo a compartir pantalla,
                            pestaña o aplicación
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span>{" "}
                            Videollamadas: conociendo las diferentes vistas de
                            Google Meet
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span>{" "}
                            Classroom: Cómo crear tareas para estudiantes
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="session__group">
                    <div className="group__title">
                      <h3>4. Evaluación del aprendizaje del alumno</h3>
                    </div>
                    <div className="group__sessions">
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span>{" "}
                            Retroalimentación de tareas o actividades de
                            aprendizaje
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span>{" "}
                            Calificación de tareas o actividades
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> Exportar
                            calificaciones a un excel
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> Reporte
                            de calificaciones en PDF
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> Kahoot
                            para evaluar alumnos
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="session__group">
                    <div className="group__title">
                      <h3>5. Extras</h3>
                    </div>
                    <div className="group__sessions">
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> Grabador
                            de pantalla
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> Captura
                            de pantalla
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span>{" "}
                            Anotaciones en pantalla para explicar tus clases
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> Tutoría
                            INDIVIDUAL con el instructor
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
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
          <p>modal text</p>
          <button onClick={toggleModal}>Cerrar</button>
        </div>
      </Modal>
    </>
  );
};

export default CourseTeacher;
