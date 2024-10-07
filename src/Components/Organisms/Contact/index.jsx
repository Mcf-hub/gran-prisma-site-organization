import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import img from '../../../Assets/chaleprincipal.jpg';
import styles from './index.module.scss';
import Hr from '../../Atoms/Hr';

const ContactSection = () => {
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
            <FontAwesomeIcon icon={faWhatsapp} /> (XX) XXXXX-XXXX
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} /> @seuInstagram
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> seuemail@exemplo.com
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Localização: Cidade/Estado
          </li>
        </ul>
        <p className={styles.noOffice}>Não contamos com um escritório físico.</p>
      </div>
    </div>
  );
};

export default ContactSection;
