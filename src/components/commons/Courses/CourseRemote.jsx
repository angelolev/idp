import React, { useState, useEffect } from "react";
import RecommendedCourses from "./RecommendedCourses";
import Modal from "react-modal";
import FormSignUp from "../Forms/FormSignUp";
import instructor from "./i-angelo.jpg";

const CourseRemote = (props) => {
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
        <div className="course__banner remoto">
          <div className="container">
            <div className="banner__content">
              <div className="course__image">
                {/* <img src={courseImage} alt="" /> */}
                <FormSignUp />
              </div>
              <div className="course__description">
                <h1>Herramientas digitales para trabajo remoto</h1>
                <p>
                  Aprenderás las herramientas, técnicas y estrategias para que
                  tú, tu empresa y tus clientes obtengan mejores resultados a
                  través del teletrabajo.
                </p>
                <small>
                  <span className="icon icon-user"></span> 119 inscritos
                </small>
                <small>
                  <span className="icon icon-time"></span> + 4 horas de clase +
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
                  Con este curso aprenderás a identificar las herramientas que
                  necesitas para adoptar nuevas habilidades, comportamientos,
                  responsabilidades para poder alinearte a las nuevas reglas del
                  mundo digital.
                </p>
                <p>
                  La crisis sanitaria mundial ha evidenciado las brechas
                  digitales en nuestra comunidad. Es momento que des el
                  siguiente paso y aprendas lo necesario para ser competitivo en
                  un mundo remoto.
                </p>
                <p>
                  Aprenderás cómo construir un equipo de alto rendimiento,
                  motivado y distribuido por múltiples países.
                </p>

                <h2>Metodología</h2>
                <ul>
                  <li>Tutor personal</li>
                  <li>Metodología 100% virtual</li>
                  <li>Clases en vivo</li>
                </ul>

                <h2>Lo que aprenderás</h2>
                <ul>
                  <li>Organización personal para trabajo remoto</li>
                  <li>Comunicación efectiva para equipos remotos</li>
                  <li>Herramientas colaborativas para el teletrabajo</li>
                  <li>Cómo conseguir trabajos remotos</li>
                </ul>

                <h2>Inversión</h2>
                <ul>
                  <li>S/100 soles</li>
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
                      <h3>1. Conociendo el teletrabajo</h3>
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
                            <span className="icon icon-player"></span> Trabajo
                            presencial vs trabajo remoto
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> Creando
                            tu entorno de trabajo remoto
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
                            Comunicación efectiva para equipos remotos
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> Trabajo
                            remoto y nuestra actualidad
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
                      <h3>2. Herramientas colaborativas para trabajo remoto</h3>
                    </div>
                    <div className="group__sessions">
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> Cómo
                            utilizar herramientas colaborativas en el
                            teletrabajo
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> Software
                            escencial para el trabajo remoto
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
                            Organización personal
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span>Cómo
                            encontrar trabajos remotos
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
                      <h3>3. Estrategias a seguir en teletrabajo</h3>
                    </div>
                    <div className="group__sessions">
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> Flujos de
                            trabajo efectivos
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
                            Equilibrio entre trabajo y familia
                          </p>
                        </div>
                        <div className="session__duration">
                          <p>01:00</p>
                        </div>
                      </div>
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span> Gestión
                            humana de equipos remotos
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
                            Implementando trabajo remoto en tu empresa
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
                      <h3>4. Próximos pasos</h3>
                    </div>
                    <div className="group__sessions">
                      <div className="session">
                        <div className="session__name">
                          <p>
                            <span className="icon icon-player"></span>{" "}
                            Integrando las herramientas en tu día a día
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

export default CourseRemote;
