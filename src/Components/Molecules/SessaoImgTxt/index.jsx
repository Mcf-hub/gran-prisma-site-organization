import React from 'react';
import styles from './index.module.scss';
import Button from '../../Atoms/Button'; 
import imageSrc from '../../../Assets/vidroFixoJanela.jpg'; // Substitua pelo caminho correto da imagem

const SessaoImagemTexto = () => {
  return (
    <section className={styles.sessaoImagemTexto}>
      <div className={styles.imagemContainer}>
        <img src={imageSrc} alt="Descrição do ambiente" />
      </div>
      <div className={styles.textoContainer}>
        <h2>
          <strong>Cada projeto é único</strong>, e na Gran Prisma, sua ideia se torna realidade com soluções exclusivas e inovadoras.
        </h2>
        <p>Não espere mais para transformar seu espaço.</p>
        <p>Entre em contato e comece a planejar o futuro que você merece!</p>
        <Button label="Peça seu orçamento" to="/contato" variant="white" />
      </div>
    </section>
  );
};

export default SessaoImagemTexto;
