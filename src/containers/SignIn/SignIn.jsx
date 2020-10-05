import React from "react";
import { useForm } from "react-hook-form";
import bgImage from "./signin.jpg";
import { fb, auth } from "../../services/firebase";

const SignUp = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        console.log("logueado");
        window.location.href = "/";
      });
  };

  const signInGoogle = () => {
    const provider = new fb.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("google login correcto");
        window.href.location = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signInFacebook = () => {
    const provider = new fb.auth.FacebookAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("facebook login correcto");
        window.href.assign = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign-in">
      <form className="sign-in__form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Inicia sesion</h2>
        <div className="sign-up__form-item">
          <button onClick={signInFacebook}>Facebook</button>
        </div>
        <div className="sign-up__form-item">
          <button onClick={signInGoogle}>Google</button>
        </div>
        <div className="sign-in__form-item">
          <input
            name="email"
            type="email"
            ref={register({ required: true })}
            placeholder="Email"
            className="form-input"
          />
          {errors.email && <span>Ingresa una dirección de correo válida</span>}
        </div>
        <div className="sign-in__form-item">
          <input
            name="password"
            type="password"
            ref={register({ required: true })}
            placeholder="Contraseña"
            className="form-input"
          />
          {errors.password && <span>Completa tu password</span>}
        </div>
        <div className="sign-in__form-item">
          <input type="submit" className="form-button" value="Registrarme" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
