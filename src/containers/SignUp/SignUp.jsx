import React from "react";
import { useForm } from "react-hook-form";
import bgImage from "./signup.jpg";
import { fb, auth } from "../../services/firebase";

const SignUp = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        console.log("registrado");
        window.location.href = "/";
      });
  };

  return (
    <div className="sign-up">
      <form className="sign-up__form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Registrate</h2>
        <div className="sign-up__form-item">
          <button>Facebook</button>
        </div>
        <div className="sign-up__form-item">
          <button>Google</button>
        </div>
        <div className="sign-up__form-item">
          <input
            name="email"
            type="email"
            ref={register({ required: true })}
            placeholder="Email"
            className="form-input"
          />
          {errors.email && <span>Ingresa una dirección de correo válida</span>}
        </div>
        <div className="sign-up__form-item">
          <input
            name="password"
            type="password"
            ref={register({ required: true })}
            placeholder="Contraseña"
            className="form-input"
          />
          {errors.password && <span>Completa tu password</span>}
        </div>
        <div className="sign-up__form-item">
          <input type="submit" className="form-button" value="Registrarme" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
