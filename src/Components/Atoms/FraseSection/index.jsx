import React from 'react';
import styles from './index.module.scss';
import Hr from '../Hr';

const FraseSection = () => {
  return (
    <section className={styles.fraseSection}>
      <div className={styles.fraseContent}>
        <h3>Transformamos sua visão em realidade com exclusividade e inovação, revelando o potencial de cada detalhe.</h3>
      </div>
      <Hr color='light'/>
    </section>
  );
};

export default FraseSection;
