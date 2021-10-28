import React from "react";

import logoONG from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header = () => {
  const itemsNav = [
    { title: "Inicio", route: "" },
    { title: "Nosotros", route: "about" },
    { title: "Novedades", route: "novelties" },
    { title: "Testimonios", route: "testimonials" },
    { title: "contacto", route: "contacts" },
    { title: "Contribuye", route: "contribute" },
  ];

  return (
    <header>
      <figure>
        <img src={logoONG} alt="Logo SOMOS ONG" />
      </figure>

      <nav>
        <ul>
          {itemsNav.map((item, index) => (
            <Link key={index} to={`/${item.route}`}>
              {item.title}
            </Link>
          ))}
        </ul>

        <div className="buttons-container">
          <button className="button login">Iniciar sesión</button>
          <button className="button signup">Registrate</button>
        </div>
      </nav>
    </header>
  );
};
