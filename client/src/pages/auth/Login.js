import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import logo from "../../assets/images/logo.png";
import "./auth.scss";
import { Link } from "react-router-dom";

export const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Formato del email invalido")
      .required("Required"),
    password: Yup.string().required("Required").min(6, "Mínimo 6 caracteres"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    const dataUser = {
      email: values.email,
      password: values.password,
    };
    console.log(dataUser);
  };

  return (
    <div className="Auth">
      <div className="auth__content">
        <img src={logo} alt="Somos Mas Logo" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                className="input"
                name="email"
                id="email"
                required
              />
              <ErrorMessage name="email">
                {(error) => <div className="alert">{error}</div>}
              </ErrorMessage>
            </div>
            <div className="input-box">
              <label htmlFor="password">Contraseña</label>
              <Field
                type="password"
                className="input"
                name="password"
                id="password"
                required
              />
              <ErrorMessage name="password">
                {(error) => <div className="alert">{error}</div>}
              </ErrorMessage>
            </div>
            <Link to="/" className="link">
              ¿Olvidáste tu contraseña?
            </Link>
            <div className="input-box">
              <button type="submit" className="btn  primary">
                Login
              </button>
            </div>
            <span>
              ¿Aún no tienes una cuenta?{" "}
              <Link to="/auth/register" className="link">
                Register
              </Link>
            </span>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
