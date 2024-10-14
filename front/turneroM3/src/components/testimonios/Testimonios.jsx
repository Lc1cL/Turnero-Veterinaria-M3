import React from 'react';
import styles from './Testimonios.module.css';

const testimonials = [
  { name: 'Juan Pérez', photo: 'https://i.ibb.co/Tgr03NZ/foto-1.webp', review: 'Excelente servicio, muy recomendable.' },
  { name: 'María Gómez', photo: 'https://i.ibb.co/N36H4Tn/foto2.jpg', review: 'Mis mascotas siempre reciben el mejor cuidado.' },
  { name: 'Carlos López', photo: 'https://i.ibb.co/G5zrkjf/foto-3.jpg', review: 'Atención muy profesional y amable. Gran experiencia, el personal es muy atento y cuidadoso con las mascotas. ' }
];

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <h2>Testimonios</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={styles.testimonialCard}>
          <img src={testimonial.photo} alt={`Foto de ${testimonial.name}`} />
          <h3>{testimonial.name}</h3>
          <p>{testimonial.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
