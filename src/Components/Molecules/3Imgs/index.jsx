import React from 'react';
import styles from './index.module.scss';
import backgroundImage1 from '../../../Assets/telhado.jpg';
import backgroundImage2 from '../../../Assets/fachada.jpg';
import backgroundImage3 from '../../../Assets/boxElegance.jpg';
import Button from '../../Atoms/Button';

const BackgroundSection = () => {
  return (
    <div className={styles.backgroundSection}>
      <div className={styles.image} style={{ backgroundImage: `url(${backgroundImage1})` }}></div>
      <div className={styles.image} style={{ backgroundImage: `url(${backgroundImage2})` }}></div>
      <div className={styles.image} style={{ backgroundImage: `url(${backgroundImage3})` }}></div>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <p className={styles.quote}>
            <h3>Comprometidos com um futuro sustentável e soluções inovadoras</h3>
            <br />
            Entre em contato e descubra como podemos criar um projeto que respeite o meio ambiente e atenda às suas necessidades.
          </p>
          <Button label="Entre em contato" to="/contato" variant="white" />
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
