import React from 'react';
import styles from './index.module.scss';
import Button from '../../Atoms/Button';
import backgroundImage from '../../../Assets/chaleprincipal.jpg'; // Substitua pelo caminho correto da imagem

const Banner = () => {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.bannerContent}>
        <h1>Dê o primeiro passo para algo grandioso.</h1>
        <Button label="Entre em contato" to="/contato" variant="white" />
      </div>
    </section>
  );
};

export default Banner;
