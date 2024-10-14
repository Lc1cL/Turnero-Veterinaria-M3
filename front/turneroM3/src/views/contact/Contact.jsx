import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "../../components/contactForm/ContactForm";
import SocialLinks from "../../components/socialLinks/SocialLinks";
import Testimonials from "../../components/testimonios/Testimonios";

const Contact = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contactPage}>
        <h1>Contacto</h1>
        <SocialLinks />
        <div className={styles.map}>
          {/* Embed Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9605716225655!2d-122.08424968469212!3d37.42199957982565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24e4c3eb2d3%3A0x807a3e755e5bbd8!2sGoogleplex!5e0!3m2!1sen!2sus!4v1628099452639!5m2!1sen!2sus"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <ContactForm />
        <Testimonials />
      </div>
    </div>
  );
};

export default Contact;
