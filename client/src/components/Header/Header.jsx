import logoONG from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header = () => {
  const itemsNav = [
    { title: "Inicio", route: "" },
    { title: "Nosotros", route: "us" },
    { title: "Novedades", route: "novelties" },
    { title: "Testimonios", route: "testimonies" },
    { title: "contacto", route: "contact" },
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
      </nav>

      <div className="buttonsContainer">
        <button className="button login">Iniciar sesión</button>
        <button className="button signup">Registrate</button>
      </div>
    </header>
  );
};
