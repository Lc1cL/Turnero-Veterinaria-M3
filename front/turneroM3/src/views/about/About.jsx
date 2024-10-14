import React from "react";
import styles from "./About.module.css";
import InfoClinica from "../../components/infoClinica/InfoClinica";
import ListaServicios from "../../components/listaServicios/ListaServicios";
import MiembrosStaff from "../../components/miembrosStaff/MiembrosStaff";

const About = () => {
  return (
    <div className={styles.mainContainer}>
      <InfoClinica />
      <div className={styles.servicesContainer}>
        <ListaServicios />
        <div className={styles.imageWrapper}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2138/2138508.png"
            alt="Icono Veterinaria"
            className={styles.image}
          />
        </div>
      </div>
      <MiembrosStaff />
    </div>
  );
};
export default About;
