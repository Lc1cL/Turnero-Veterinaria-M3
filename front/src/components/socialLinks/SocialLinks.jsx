import React from 'react';
import styles from './SocialLinks.module.css';
import { FaInstagram, FaTwitter, FaTiktok, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <h2>Información de Contacto</h2>
      <p><FaInstagram /> Instagram: @veterinaria_patitas</p>
      <p><FaTwitter /> X: @veterinaria_patitas</p>
      <p><FaTiktok /> TikTok: @veterinaria_patitas</p>
      <p><FaWhatsapp /> WhatsApp: +1234567890</p>
      <p><FaEnvelope /> Email: contacto@veterinariapatitas.com</p>
      <p><FaPhone /> Teléfono: +123-456-7890</p>
    </div>
  );
};

export default SocialLinks;
