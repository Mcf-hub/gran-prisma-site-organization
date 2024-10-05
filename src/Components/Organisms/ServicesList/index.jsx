import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faPaintRoller, faTools, faDraftingCompass, faCouch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import Button from '../../Atoms/Button';
import Hr from '../../Atoms/Hr';

const Services = () => {
  const services = [
    { id: 1, icon: faHammer, name: 'Construção' },
    { id: 2, icon: faPaintRoller, name: 'Pintura' },
    { id: 3, icon: faTools, name: 'Reparos' },
    { id: 4, icon: faDraftingCompass, name: 'Design de Interiores' },
    { id: 5, icon: faCouch, name: 'Decoração' },
  ];

  return (
    <div className={styles.servicesContainer}>
      <h2>Serviços que oferecemos</h2>
      <Hr color='dark'/>
      <div className={styles.servicesList}>
        {services.map((service) => (
          <Link to="/servicos" key={service.id} className={styles.serviceItem}>
            <FontAwesomeIcon icon={service.icon} size="2x" className={styles.icon} />
            <p>{service.name}</p>
          </Link>
        ))}
        <div className={styles.serviceItem}>
          <Button label="Confira todos!" to="/servicos" variant="default"/>
        </div>
      </div>
    </div>
  );
};

export default Services;
