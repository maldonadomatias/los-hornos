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
            <button><FaFacebookF/></button>
            <button><FaInstagram/></button>
            <button><FaTripadvisor/></button>
          </div>
            <button className={classes.button} onClick={closeModal}>close</button>
        </Modal>}
      </div>
      <hr className={classes.line} />
      <ul className={classes.social}>
        <Link to="#">
          <p>Sobre Nosotros</p>
        </Link>
        <li>
          <p>Contacto</p>
        </li>
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
