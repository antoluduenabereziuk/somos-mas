import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./styles/Login.scss";

const Login = () => {
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
    <div className="container">
      <h1>Registrate</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              className="input email"
              type="email"
              name="email"
              id="email"
              required
            />
            <ErrorMessage name="email">
              {(error) => <div className="alert alert-danger">{error}</div>}
            </ErrorMessage>
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <Field
              className="input password"
              type="password"
              name="password"
              id="password"
              required
            />
            <ErrorMessage name="password">
              {(error) => <div className="alert alert-danger">{error}</div>}
            </ErrorMessage>
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export { Login };
