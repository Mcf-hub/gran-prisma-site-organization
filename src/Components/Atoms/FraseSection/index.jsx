import React from 'react';
import styles from './index.module.scss';
import Hr from '../Hr';

const FraseSection = () => {
  return (
    <section className={styles.fraseSection}>
      <div className={styles.fraseContent}>
        <p>Transformamos sua visão em realidade com exclusividade e inovação, revelando o potencial de cada detalhe.</p>
      </div>
      <Hr color='light'/>
    </section>
  );
};

export default FraseSection;
