import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <hr className={classes.line}/>
      <ul className={classes.social}>
        <li>
          <Link to="admin">
            <p>Sobre Nosotros</p>
          </Link>
        </li>
        <li>
          <p>Contacto</p>
        </li>
        <li>
          <p>Redes Sociales</p>
        </li>
      </ul>
      <p className={classes.copyright}>
        © 2021 Matías A. Maldonado. All Rights Reserved. Terms, Privacy &amp;
        Accessibility
      </p>
    </div>
  );
};

export default Footer;
