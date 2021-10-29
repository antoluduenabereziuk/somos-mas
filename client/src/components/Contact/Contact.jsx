import React, { Component } from "react";
import "./Contact.scss";

export class Contact extends Component {
  render() {
    return (
      <div className="container py-4">
        <h2 className="text-center">Contáctate con nosotros</h2>
        <form id="contactForm">
          <div className="mb-3 names">
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Nombre"
                />
              </div>
              <div className="col">
                <label className="form-label" htmlFor="name">
                  Apellido
                </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Apellido"
                />
                <div />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="emailAddress">
              Email
            </label>
            <input
              className="form-control"
              id="emailAddress"
              type="email"
              placeholder="Correo Electronico"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Escribe tu consulta..
            </label>
            <textarea
              className="form-control"
              id="message"
              type="text"
              placeholder="Mensaje"
              style={{ height: "10rem" }}
              defaultValue={""}
            />
          </div>

          <div className="d-grid">
            <button className="btn btn-primary btn-lg" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
