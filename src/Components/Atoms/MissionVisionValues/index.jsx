import React from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs, faEye, faGem } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const ThreeSquares = ({ showButton = true }) => { 
  const items = [
    { 
      icon: faCrosshairs, 
      title: 'Missão', 
      text: 'Realizar projetos exclusivos que transformam sonhos em realidade, oferecendo conforto, glamour e um atendimento focado nas necessidades do cliente, com qualidade e confiança.' 
    },
    { 
      icon: faEye, 
      title: 'Visão', 
      text: 'Ser referência nacional em projetos exclusivos e inovadores, com atendimento de excelência, superando expectativas com uma equipe qualificada e tecnologias de ponta.' 
    },
    { 
      icon: faGem, 
      title: 'Valores', 
      text: (
        <>
          Compromisso <br />
          Inovação <br />
          Sustentabilidade <br />
          Excelência
        </>
      ) 
    },
  ];

  return (
    <div className={styles.squareContainer}>
      {items.map((item, index) => (
        <div key={index} className={styles.square}>
          <FontAwesomeIcon icon={item.icon} size="2x" color='#333' />
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      ))}
      {showButton && ( 
        <div className={styles.buttonContainer}>
          <Button label="Saiba mais sobre nossa história" to="/quem-somos" variant="default" />
        </div>
      )}
    </div>
  );
};

export default ThreeSquares;
