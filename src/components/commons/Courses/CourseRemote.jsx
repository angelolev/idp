import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
      <Helmet htmlAttributes>
        <html lang="es" />
        <title>Herramientas digitales para trabajo remoto | Innodesign</title>
        <meta
          name="description"
          content="Aprende las herramientas, técnicas y estrategias para que
                  tú, tu empresa y tus clientes obtengan mejores resultados a
                  través del teletrabajo."
        />
        <meta
          property="og:title"
          content="Herramientas digitales para trabajo remoto"
        />
        <meta
          property="og:description"
          content="Aprende las herramientas, técnicas y estrategias para que
      tú, tu empresa y tus clientes obtengan mejores resultados a
      través del teletrabajo."
        />
        <meta
          property="og:image"
          content="https://www.innodesign.academy/static/media/bg-remoto.4ffe69c8.jpg"
        />
      </Helmet>
      <section className="course">
        <div className="course__banner remoto">
          <div className="container">
            <div className="banner__content">
              <div className="course__image">
                {/* <img src={courseImage} alt="" /> */}
                <FormSignUp />
                <a onClick={toggleModal}>Ver opciones de pago</a>
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
                  <span className="icon icon-time"></span> 04 días | + 4 horas
                  de clase | Asesoría individual
                </small>
                <h4>Horarios</h4>
                <ul>
                  <li>Lunes a Jueves 09:00 PM</li>
                  <li>Martes y Jueves 09:30 PM</li>
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
                <ul className="price">
                  <li>
                    <span>S/100 soles</span>
                    {/* <span>S/50 soles</span> */}
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
                      <h3>1. Conociendo el teletrabajo</h3>
                    </div>
                    <div className="group__sessions">
                      <Session name="Presentación del curso" duration="01:00" />
                      <Session
                        name="Trabajo presencial vs trabajo remoto"
                        duration="01:00"
                      />
                      <Session
                        name="Creando tu entorno de trabajo remoto"
                        duration="01:00"
                      />
                      <Session
                        name="Comunicación efectiva para equipos remotos"
                        duration="01:00"
                      />
                      <Session
                        name="Trabajo remoto y nuestra actualidad"
                        duration="01:00"
                      />
                    </div>
                  </div>
                  <div className="session__group">
                    <div className="group__title">
                      <h3>2. Herramientas colaborativas para trabajo remoto</h3>
                    </div>
                    <div className="group__sessions">
                      <Session
                        name="Cómo utilizar herramientas colaborativas en el teletrabajo"
                        duration="01:00"
                      />
                      <Session
                        name="Software escencial para el trabajo remoto"
                        duration="01:00"
                      />
                      <Session
                        name="Videollamadas: Meet vs Zoom"
                        duration="01:00"
                      />
                      <Session
                        name="Usando Trello como organizador personal"
                        duration="01:00"
                      />
                      <Session
                        name="Comunicación con mi equipo: Slack, Discord, Whatsapp, Telegram"
                        duration="01:00"
                      />
                      <Session
                        name="Cómo buscar y encontrar trabajos remotos"
                        duration="01:00"
                      />
                    </div>
                  </div>
                  <div className="session__group">
                    <div className="group__title">
                      <h3>3. Estrategias a seguir en teletrabajo</h3>
                    </div>
                    <div className="group__sessions">
                      <Session
                        name="Flujos de trabajo efectivos"
                        duration="01:00"
                      />
                      <Session
                        name="Equilibrio entre trabajo y familia"
                        duration="01:00"
                      />
                      <Session
                        name="Gestión humana de equipos remotos"
                        duration="01:00"
                      />
                      <Session
                        name="Implementando trabajo remoto en tu empresa"
                        duration="01:00"
                      />
                    </div>
                  </div>
                  <div className="session__group">
                    <div className="group__title">
                      <h3>4. Próximos pasos</h3>
                    </div>
                    <div className="group__sessions">
                      <Session
                        name="Integrando las herramientas en tu día a día"
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

export default CourseRemote;
