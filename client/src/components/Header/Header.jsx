import logoONG from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import "./Header.scss";

function Header() {
  const itemsNav = [
    "Inicio",
    "Nosotros",
    "Actividades",
    "Novedades",
    "Testimonios",
    "Contacto",
    "Contribuye",
  ];

  return (
    <header>
      <figure>
        <img src={logoONG} alt="Logo SOMOS ONG" />
      </figure>

      <nav>
        <ul>
          {itemsNav.map((item, index) => (
            <Link key={index} to="/">
              {item}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="buttonsContainer">
        <button className="button login">Iniciar sesión</button>
        <button className="button signup">Registrate</button>
      </div>
    </header>
  );
}

export { Header };
