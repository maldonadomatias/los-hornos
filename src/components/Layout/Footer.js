import React, { useState } from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import Modal from "../UI/Modal";
import {FaFacebookF, FaInstagram, FaTripadvisor} from 'react-icons/fa'


const Footer = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={classes.footer}>
      <div>
        {modalIsOpen && <Modal>
          <div className={classes.icons}>
            <a href="https://www.facebook.com/loshornosybrestaurante/photos/a.177243024323682/342364597811523"><FaFacebookF/></a>
            <a href="https://www.instagram.com/loshornosyb/?hl=es"><FaInstagram/></a>
            <a href="https://www.tripadvisor.com.ar/Restaurant_Review-g312826-d8376653-Reviews-Parrilla_Los_Hornos-San_Miguel_de_Tucuman_Province_of_Tucuman_Northern_Argentina.html"><FaTripadvisor/></a>
          </div>
            <button className={classes.button} onClick={closeModal}>Cerrar</button>
        </Modal>}
      </div>
      <hr className={classes.line} />
      <ul className={classes.social}>
        <li onClick={openModal}>
          <p>Redes Sociales</p>
        </li>
        <Link to="admin">
          <p>Administrador</p>
        </Link>
      </ul>
      <p className={classes.copyright}>
        © 2021 Matías A. Maldonado. All Rights Reserved. Terms, Privacy &amp;
        Accessibility
      </p>
    </div>
  );
};

export default Footer;
