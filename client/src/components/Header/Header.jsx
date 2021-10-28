import React, { useState } from "react";
import { Link } from "react-router-dom";

import logoONG from "../../assets/images/logo.png";

import "./Header.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const showNavbar = isOpen ? "show" : "";

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
      <figure className="logo">
        <img src={logoONG} alt="Logo SOMOS ONG" />
      </figure>

      <nav className={`navbar ${showNavbar}`}>
        <ul className="navbar-list">
          {itemsNav.map((item, index) => (
            <Link key={index} to={`/${item.route}`}>
              {item.title}
            </Link>
          ))}
        </ul>

        <div className="buttons-container">
          <button className="button login">Iniciar sesión</button>
          <button className="button signup">Registrarse</button>
        </div>

        <figure className="logo navbar-logo">
          <img src={logoONG} alt="Logo SOMOS ONG" />
        </figure>
      </nav>

      <button onClick={handleNavbar} className="hamburger">
        X
      </button>
    </header>
  );
};
