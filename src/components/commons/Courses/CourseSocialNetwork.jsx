import React, { useEffect } from "react";
import RecommendedCourses from "./RecommendedCourses";
import courseImage from "./cm.png";

const Course = (props) => {
  useEffect(() => {
    setTimeout(function () {
      window.scrollTo(0, 1);
    }, 0);
  });
  const { name, description, image } = props;
  return (
    <section className="course">
      <div className="course__banner">
        <div className="container">
          <div className="banner__content">
            <div className="course__image">
              <img src={courseImage} alt="" />
            </div>
            <div className="course__description">
              <h1>Creando tu propia tienda online</h1>
              <p>
                Aprenderás a administrar productos, hacer ofertas, cupones,
                configurar pasarelas de pago y publicar tu tienda desde el
                primer día.
              </p>
              <small>
                <span className="icon icon-user"></span> 103 inscritos
              </small>
              <small>
                <span className="icon icon-time"></span> + 4 horas de clase +
                tutoría individual
              </small>
              <h4>Horarios</h4>
              <ul>
                <li>Lunes y Martes 08:00PM - 09:00PM</li>
                <li>Miercoles y Viernes 08:00PM - 09:00PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="course__info">
        <div className="container">
          <div className="course__top">
            <div className="course__presentation has-shadow">
              <p>
                Con este curso aprenderás a crear tu tienda en línea. Obtendrás
                muy rapido los fundamentos para hacer ventas online y saber cómo
                vender en Internet. El curso está compuesto de clases en vivo y
                incluye también tutorias individuales para resolver dudas y
                ayudarte a implementar tu tienda.
              </p>
              <p>
                Todas las clases del curso son prácticas. El alumno trabaja con
                su propio proyecto real y desarrolla su propia tienda online.
                Desde los primeros pasos configurando tu tienda hasta crear tu
                catálogo de productos.
              </p>
              <p>
                Todos los alumnos terminan el curso con su tienda online creada
                y configurada. Ideal para lanzar tu propio negocio y empezar a
                vender por Internet.
              </p>

              <h2>Lo que aprenderás</h2>
              <ul>
                <li>Armar tu propia tienda online(woocommerce)</li>
                <li>
                  Crearás tu catálogo de productos, datos de facturación y pago,
                  página de seguimiento de pedidos, carrito de compra
                  actualizado en tiempo real, menús de categorias, ofertas y
                  mucho más.
                </li>
                <li>
                  Aprenderás a editar y hacer todos los cambios que necesites o
                  desees hacer en un futuro.
                </li>
              </ul>
            </div>
          </div>
          <div className="course__bottom">
            <div className="course__sessions has-shadow">
              <h2>Estas son las clases</h2>
              <div className="sessions__list">
                <div className="session__group">
                  <div className="group__title">
                    <h3>1. Primeros pasos en WooCommerce</h3>
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
                          <span className="icon icon-player"></span> ¿Qué es y
                          por qué utilizar WooCommerce?
                        </p>
                      </div>
                      <div className="session__duration">
                        <p>01:00</p>
                      </div>
                    </div>
                    <div className="session">
                      <div className="session__name">
                        <p>
                          <span className="icon icon-player"></span> Instalando
                          WooCommerce
                        </p>
                      </div>
                      <div className="session__duration">
                        <p>01:00</p>
                      </div>
                    </div>
                    <div className="session">
                      <div className="session__name">
                        <p>
                          <span className="icon icon-player"></span> Entendiendo
                          cómo funciona WooCommerce
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
                    <h3>2. Gestión de productos</h3>
                  </div>
                  <div className="group__sessions">
                    <div className="session">
                      <div className="session__name">
                        <p>
                          <span className="icon icon-player"></span> Creando
                          productos
                        </p>
                      </div>
                      <div className="session__duration">
                        <p>01:00</p>
                      </div>
                    </div>
                    <div className="session">
                      <div className="session__name">
                        <p>
                          <span className="icon icon-player"></span> Creando un
                          combo de productos
                        </p>
                      </div>
                      <div className="session__duration">
                        <p>01:00</p>
                      </div>
                    </div>
                    <div className="session">
                      <div className="session__name">
                        <p>
                          <span className="icon icon-player"></span> Creando un
                          producto variable
                        </p>
                      </div>
                      <div className="session__duration">
                        <p>01:00</p>
                      </div>
                    </div>
                    <div className="session">
                      <div className="session__name">
                        <p>
                          <span className="icon icon-player"></span> Creando un
                          producto digital
                        </p>
                      </div>
                      <div className="session__duration">
                        <p>01:00</p>
                      </div>
                    </div>
                    <div className="session">
                      <div className="session__name">
                        <p>
                          <span className="icon icon-player"></span> Categorías
                          de productos
                        </p>
                      </div>
                      <div className="session__duration">
                        <p>01:00</p>
                      </div>
                    </div>
                    <div className="session">
                      <div className="session__name">
                        <p>
                          <span className="icon icon-player"></span> Importando
                          productos masivamente
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
                    <h3>3. Diseño de tu tienda</h3>
                  </div>
                  <div className="group__sessions">
                    <div className="session">
                      <div className="session__name">
                        <p>
                          <span className="icon icon-player"></span>{" "}
                          Configurando las páginas de tu tienda
                        </p>
                      </div>
                      <div className="session__duration">
                        <p>01:00</p>
                      </div>
                    </div>
                    <div className="session">
                      <div className="session__name">
                        <p>
                          <span className="icon icon-player"></span> Agregando
                          un menú principal a tu página
                        </p>
                      </div>
                      <div className="session__duration">
                        <p>01:00</p>
                      </div>
                    </div>
                    <div className="session">
                      <div className="session__name">
                        <p>
                          <span className="icon icon-player"></span> Conociendo
                          las plantillas
                        </p>
                      </div>
                      <div className="session__duration">
                        <p>01:00</p>
                      </div>
                    </div>
                    <div className="session">
                      <div className="session__name">
                        <p>
                          <span className="icon icon-player"></span> Te regalo
                          para mi, el mejor tema a usar en una tienda (BONUS)
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
                    <h3>4. Configuraciones de tu tienda</h3>
                  </div>
                  <div className="group__sessions">
                    <div className="session">
                      <div className="session__name">
                        <p>
                          <span className="icon icon-player"></span> Flujo de
                          pedido y compra en tu tienda
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
                          cupones de descuento
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
                          Configurando tus usuarios
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
                          Configurando el envío de pedidos
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
                          Configurando las notificaciones de email
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
                    <h3>5. Métodos de pago</h3>
                  </div>
                  <div className="group__sessions">
                    <div className="session">
                      <div className="session__name">
                        <p>
                          <span className="icon icon-player"></span>{" "}
                          Configurando distintos métodos de pago
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
                          Configurando Paypal
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
                          Configurando Mercado Pago
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
                    <h3>6. Últimos pasos</h3>
                  </div>
                  <div className="group__sessions">
                    <div className="session">
                      <div className="session__name">
                        <p>
                          <span className="icon icon-player"></span>{" "}
                          Conclusiones del curso
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
  );
};

export default Course;
