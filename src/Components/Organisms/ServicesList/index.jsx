import React from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../Atoms/Button';
import Hr from '../../Atoms/Hr';

import icon1 from '../../../Assets/boxIcon.png';
import icon2 from '../../../Assets/fachadaIcon.png';
import icon3 from '../../../Assets/telhadoIcon.png';
import icon4 from '../../../Assets/gazeboIcon.png';
import icon5 from '../../../Assets/sacadaIcon.png';


const Services = () => {
  const services = [
    { id: 1, icon: icon1, name: 'box elegance' },
    { id: 2, icon: icon2, name: 'fachada' },
    { id: 3, icon: icon3, name: 'telhado' },
    { id: 4, icon: icon4, name: 'gazebo' },
    { id: 5, icon: icon5, name: 'sacada' },
  ];

  return (
    <div className={styles.servicesContainer}>
      <h2>Serviços que oferecemos</h2>
      <Hr color='dark'/>
      <div className={styles.servicesList}>
        {services.map((service) => (
          <Link to="/servicos" key={service.id} className={styles.serviceItem}>
            <img src={service.icon} alt={service.name} className={styles.icon} />
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
