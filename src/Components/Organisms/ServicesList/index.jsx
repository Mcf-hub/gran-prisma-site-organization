import React from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const handleNavigation = (link) => {
    window.scrollTo(0, 0); // Rola para o topo da página
    navigate(link); // Navega para a nova página
  };

  return (
    <div className={styles.servicesContainer}>
      <h2>Serviços que oferecemos</h2>
      <Hr color='dark' />
      <div className={styles.servicesList}>
        {services.map((service) => (
          <div
            key={service.id}
            className={styles.serviceItem}
            onClick={() => handleNavigation("/servicos")}
            role="button" // Indica que é um botão para acessibilidade
            tabIndex={0} // Permite que o div seja focado
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleNavigation("/servicos"); // Navegação com Enter
            }}
          >
            <img src={service.icon} alt={service.name} className={styles.icon} />
            <p>{service.name}</p>
          </div>
        ))}
        <div className={styles.serviceItem}>
          <Button label="Confira todos!" onClick={() => handleNavigation("/servicos")} variant="default" />
        </div>
      </div>
    </div>
  );
};

export default Services;
