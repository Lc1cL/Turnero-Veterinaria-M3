import React from 'react';
import styles from './Bienvenida.module.css';

const Bienvenida = () => {
  return (
    <div className={styles.welcome}>
      <h1>Bienvenidos a Veterinaria Patitas</h1>
      <p>
        En Veterinaria Patitas, estamos dedicados a brindar el mejor cuidado para tus mascotas. Nuestro equipo de profesionales está aquí para ayudarte con todas tus necesidades veterinarias.
      </p>
      <img 
        src="https://media.istockphoto.com/id/499600684/es/foto/feliz-grupo-de-veterinarios-con-animales-en-vet-de-la-oficina.jpg?s=612x612&w=0&k=20&c=vLO5s-_OQphEF3m4XlhPnrHI6U4IwiKwmLzTQ5OwqB0="
        alt="Veterinary Clinic"
        className={styles.image}
      />
    </div>
  );
};

export default Bienvenida;