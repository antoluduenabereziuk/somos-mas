import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    <div className="container text-center">
      <h1 className="mt-2">Formulario de Login</h1>
      <div className="row">
        <div className="mx-3 col-lg-12 col-md-12 col-xs-12">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="mt-3 col-12">
              <div className="form-group mb-3">
                <label htmlFor="email">
                  Email:
                  <Field
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                  <ErrorMessage name="email">
                    {(error) => (
                      <div className="alert alert-danger">{error}</div>
                    )}
                  </ErrorMessage>
                </label>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">
                  Contraseña:
                  <Field
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    required
                  />
                  <ErrorMessage name="password">
                    {(error) => (
                      <div className="alert alert-danger">{error}</div>
                    )}
                  </ErrorMessage>
                </label>
              </div>
              <div className="form-group mb-3">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export { Login };
