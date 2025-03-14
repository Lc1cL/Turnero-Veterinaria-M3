import React from 'react';
import styles from './ListaServicios.module.css';

const ListaServicios = () => {
  return (
    <section className={styles.servicesList}>
      <h2>Nuestros Servicios</h2>
      <ul>
        <li>◉ Consultas Médicas</li>
        <li>◉ Cirugías</li>
        <li>◉ Vacunaciones</li>
        <li>◉ Análisis Clínicos</li>
        <li>◉ Radiografías y Ecografías</li>
        <li>◉ Laboratorio Clínico</li>
        <li>◉ Hospitalización</li>
        <li>◉ Rehabilitación y Fisioterapia</li>
        <li>◉ Urgencias y Cuidados Críticos</li>
        <li>◉ Baños</li>
        <li>◉ Peliqueria canina/felina</li>
        
      </ul>
    </section>
  );
}

export default ListaServicios;
