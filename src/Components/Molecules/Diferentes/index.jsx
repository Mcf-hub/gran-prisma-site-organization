import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMedal, faPeopleGroup, faLightbulb, faLeaf, faHandshake } from '@fortawesome/free-solid-svg-icons'; // Exemplo de ícones
import styles from './index.module.scss'; // Importe seu SCSS
import Hr from '../../Atoms/Hr';

const DifferentSection = () => {
  const topics = [
    {
      icon: faStar,
      title: 'Projetos Exclusivos e Personalizados',
      description: 'A empresa se especializa em criar soluções únicas e personalizadas, adaptadas às necessidades e desejos específicos de cada cliente.',
    },
    {
      icon: faLightbulb,
      title: 'Inovação e Tecnologia de Ponta',
      description: 'Utiliza maquinário robotizado e tecnologias avançadas para garantir a precisão e a qualidade dos projetos, superando as práticas convencionais do mercado.',
    },
    {
      icon: faMedal,
      title: 'Atendimento de Excelência',
      description: 'Oferece um atendimento personalizado e focado nas necessidades do cliente, com uma equipe altamente qualificada que garante uma experiência satisfatória e deslumbrante.',
    },
    {
      icon: faLeaf,
      title: 'Compromisso com a Sustentabilidade',
      description: 'Adota práticas sustentáveis em seus projetos e processos, alinhando-se com a responsabilidade ambiental e a inovação. com práticas sustentáveis em todos os projetos.',
    },
    {
      icon: faHandshake,
      title: 'Credibilidade e Confiança',
      description: 'A empresa é reconhecida por sua integridade e compromisso com a qualidade, sendo uma referência no mercado nacional.mos sempre atualizados com as últimas tendências.',
    },
    {
      icon: faPeopleGroup,
      title: 'Experiência e Profissionalismo',
      description: 'Possui uma equipe experiente e profissional, com expertise em transformar ideias em soluções de alta qualidade. projeto recebe atenção especial em cada detalhe.',
    },
  ];

  return (
    <section className={styles.differentSection}>
      <h2>Por que somos diferentes?</h2>
      <Hr color='dark'/>
      <div className={styles.container}>
        {topics.map((topic, index) => (
          <div key={index} className={styles.topic}>
            <FontAwesomeIcon icon={topic.icon} className={styles.icon} />
            <div className={styles.textContainer}>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DifferentSection;
