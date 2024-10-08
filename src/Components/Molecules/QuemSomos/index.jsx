import React from 'react';
import styles from './index.module.scss';
import imageSrc from '../../../Assets/lucas e mateus.jpg'; // Substitua pelo caminho correto da imagem
import Hr from '../../Atoms/Hr';

const QuemSomoss = () => {
  return (
    <section className={styles.sessaoImagemTexto}>
      <div className={styles.imagemContainer}>
        <img src={imageSrc} alt="Sócios" />
      </div>
      <div className={styles.textoContainer}>
        <h2>
            Quem somos?
        </h2>
        <Hr color='dark'/>
        <p>A Gran Prisma é uma empresa especializada em projetos exclusivos e personalizados no setor de vidros. Nossa missão é transformar sonhos em realidade, proporcionando soluções que combinam inovação, conforto e elegância. Com foco na excelência, compromisso e sustentabilidade, buscamos superar expectativas e ser referência no mercado. Nossa equipe altamente qualificada utiliza tecnologias de ponta e maquinário de última geração, garantindo qualidade superior e prazos reduzidos. Na Gran Prisma, cada projeto é visto sob um novo ângulo, onde os detalhes fazem toda a diferença.</p>
        
      </div>
    </section>
  );
};

export default QuemSomoss;