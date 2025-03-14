import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {

    const handleClick = () => {
        alert("Gracias por su paciencia. Nos estaremos comunicando con usted brevemente!")
    }


  return (
    <form className={styles.contactForm}>
      <h2>Contactese con nosotros</h2>
      <label htmlFor="name">Nombre y Apellido</label>
      <input type="text" id="name" name="name" required />
      
      <label htmlFor="contact">Número de Contacto</label>
      <input type="tel" id="contact" name="contact" required />
      
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      
      <label htmlFor="message">Detalles de la Comunicación</label>
      <textarea id="message" name="message" rows="4" required></textarea>
      
      <button type="submit" onClick={handleClick}>Enviar</button>
    </form>
  );
};

export default ContactForm;
