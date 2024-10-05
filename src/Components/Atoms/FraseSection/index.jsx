import React from 'react';
import styles from './index.module.scss';

const FraseSection = () => {
  return (
    <section className={styles.fraseSection}>
      <div className={styles.fraseContent}>
        <p>Transformamos sua visão em realidade com exclusividade e inovação, revelando o potencial de cada detalhe.</p>
      </div>
      <hr className={styles.divider} />
    </section>
  );
};

export default FraseSection;
