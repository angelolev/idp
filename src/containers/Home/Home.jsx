import React from "react";
import Header from "../../components/commons/Header/Header";
import Benefits from "../../components/commons/Benefits/Benefits";
import Testimonials from "../../components/commons/Testimonials/Testimonials";
import CoursesList from "../../components/commons/Courses/CoursesList";
import Banner from "../../components/commons/Banner/Banner";

const Home = () => {
  return (
    <>
      <Header />
      <Benefits />
      <div className="container">
        <CoursesList />
        {/* <div className="business">
            <h2>Educacion para empresas</h2>
            <p>Descubre una forma interactiva y cercana de desarrollar el talento en tu equipo de trabajo, con rutas de aprendizaje alineadas a los objetivos del negocio y de tus colaboradores.</p>
        </div> */}
      </div>
      <Testimonials />
      <Banner />
    </>
  );
};

export default Home;
