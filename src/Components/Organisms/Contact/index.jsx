import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import img from '../../../Assets/chaleprincipal.jpg';
import styles from './index.module.scss';
import Hr from '../../Atoms/Hr';

const ContactSection = () => {

  const handleWhatsAppClick = () => {
    const phoneNumber = '+5512996430031';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };


  return (
    <div className={styles.contactContainer}>
      <div className={styles.imageContainer}>
        <img src={img} />
      </div>
      <div className={styles.infoContainer}>
        <h1>Entre em contato</h1>
        <Hr color='dark'/>
        <ul className={styles.contactList}>
           <li>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <a href="mailto:contato@granprisma.com"> contato@granprisma.com</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
              <a href="#" onClick={handleWhatsAppClick}> (12)  99643-0031</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              <a href="https://www.instagram.com/granprisma/" target="_blank" rel="noopener noreferrer"> @granprisma</a>
            </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Campos do Jordão - SP
          </li>
        </ul>
        <p className={styles.noOffice}>Não contamos com um escritório físico.</p>
      </div>
    </div>
  );
};

export default ContactSection;
