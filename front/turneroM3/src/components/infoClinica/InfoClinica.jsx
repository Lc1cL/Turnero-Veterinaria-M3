import React from "react";
import styles from "./InfoClinica.module.css";

const InfoClinica = () => {
  return (
    <div>
      <div className={styles.clinicInfo}>
        <h1>Nuestra Clínica</h1>
        <p>
          Descripción detallada de la clínica, su fundador, y la experiencia del
          equipo.
        </p>
      </div>
    </div>
  );
};

export default InfoClinica;
