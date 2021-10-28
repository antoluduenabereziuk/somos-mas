import { Link } from "react-router-dom";

import logoONG from "../../assets/images/logo.png";
// Icons
import iconFacebook from "../../assets/icons/facebook.svg";
import iconTwitter from "../../assets/icons/twitter.svg";
import iconYoutube from "../../assets/icons/youtube.svg";
import iconInstagram from "../../assets/icons/instagram.svg";

import "./Footer.scss";

export const Footer = () => {
  const itemsLeftFooter = [
    { title: "Noticias", route: "news" },
    { title: "Actividades", route: "activities" },
    { title: "Novedades", route: "novelties" },
  ];

  const itemsRightFooter = [
    { title: "Testimonios", route: "testimonials" },
    { title: "Nosotros", route: "about" },
    { title: "Contacto", route: "contacts" },
  ];

  return (
    <footer>
      <section className="footer-nav">
        <ul className="list-left">
          {itemsLeftFooter.map((item, index) => (
            <Link key={index} to={`/${item.route}`}>
              {item.title}
            </Link>
          ))}
        </ul>
        <figure>
          <img src={logoONG} alt="Logo SOMOS ONG" />
        </figure>
        <ul className="list-right">
          {itemsRightFooter.map((item, index) => (
            <Link key={index} to={`/${item.route}`}>
              {item.title}
            </Link>
          ))}
        </ul>
      </section>
      <div className="social-media">
        <ul>
          <li>
            <a href="/">
              <img
                className="icon"
                src={iconFacebook}
                alt="Icono de Facebook"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="icon"
                src={iconInstagram}
                alt="Icono de Instagram"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img className="icon" src={iconTwitter} alt="Icono de Twitter" />
            </a>
          </li>
          <li>
            <a href="/">
              <img className="icon" src={iconYoutube} alt="Icono de Youtube" />
            </a>
          </li>
        </ul>
        <p>2021 by Alkemy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
