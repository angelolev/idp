import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home/Home";
import Course from "../containers/Course/Course";
import CourseSocialNetwork from "../components/commons/Courses/CourseSocialNetwork";
import CourseRemote from "../components/commons/Courses/CourseRemote";
import CourseTeachers from "../components/commons/Courses/CourseTeachers";
import Calendar from "../containers/Calendar/Calendar";
import Business from "../containers/Business/Business";
import SignIn from "../containers/SignIn/SignIn";
import SignUp from "../containers/SignUp/SignUp";
import AboutUs from "../containers/AboutUs/AboutUs";
import Terms from "../containers/Terms/Terms";
import Layout from "../components/commons/Layout";

import "../styles.scss";
import HowItWorks from "../containers/HowItWorks/HowItWorks";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/cursos/:course" component={Course} /> */}
        <Route exact path="/cursos/ecommerce" component={Course} />
        <Route exact path="/cursos/cm" component={CourseSocialNetwork} />
        <Route exact path="/cursos/trabajo-remoto" component={CourseRemote} />
        <Route exact path="/cursos/docentes" component={CourseTeachers} />
        <Route exact path="/calendario" component={Calendar} />
        <Route exact path="/empresas" component={Business} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sobre-nosotros" component={AboutUs} />
        <Route exact path="/terminos" component={Terms} />
        <Route exact path="/como-funciona" component={HowItWorks} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
