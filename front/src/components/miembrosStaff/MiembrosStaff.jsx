import React from 'react';
import styles from './MiembrosStaff.module.css';

const MiembrosStaff = () => {
  return (
    <div className={styles.teamMembers}>
      <h2>Equipo de Trabajo</h2>
      <div className={styles.teamMember}>
        <img src="https://envato-shoebox-0.imgix.net/d07c/dfd1-8039-4659-8997-fe7c611d0b15/65536f0f0e98c305ed2ec078_withmeta.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=700&fit=max&markalign=center%2Cmiddle&markalpha=18&s=d1ad1252c6d4531543c18d93ce6705a0" alt="Lic. Ana Carolina" />
        <div>
          <h3>Lic. Ana Carolina</h3>
          <p>Especialidad: Medicina general y Cardiología</p>
          <p>Atención integral de mascotas, abordando desde consultas de rutina y vacunaciones hasta diagnósticos y tratamientos avanzados para enfermedades del corazón.</p>
        </div>
      </div>

      <div className={styles.teamMember}>
        <img src="https://www.shutterstock.com/image-photo/young-handsome-veterinarian-petting-noble-600nw-2285054237.jpg" alt="Lic. Javier Gonzalez" />
        <div>
          <h3>Lic. Javier Gonzalez</h3>
          <p>Especialidad: Cirugía y Medicina Exóticos </p>
          <p> Procedimientos quirúrgicos complejos y proveeduría de atención médica a una variedad de animales no convencionales, como reptiles, aves y pequeños mamíferos.</p>
        </div>
      </div>
      
    </div>
  );
}

export default MiembrosStaff;
