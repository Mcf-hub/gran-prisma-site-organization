import React from 'react';
import styles from './index.module.scss'; // Importe seu SCSS
import Hr from '../../Atoms/Hr';

const SustainabilitySection = () => {
  const topics = [
    {
      title: 'Materiais Sustentáveis',
      description: 'Selecionamos vidros e acabamentos com certificações de sustentabilidade, garantindo um uso responsável em nossos projetos.'
    },
    {
      title: 'Economia de Energia',
      description: 'Adotamos tecnologias que reduzem o consumo de energia e as emissões de carbono na fabricação e instalação.'
    },
    {
      title: 'Reciclagem',
      description: 'Promovemos a reciclagem de resíduos de vidro, contribuindo para a economia circular e a conservação de recursos.'
    },
    {
      title: 'Redução de Resíduos',
      description: 'Implementamos processos eficientes que minimizam o desperdício e otimizam o uso dos materiais.'
    },
    {
      title: 'Conscientização Ambiental',
      description: 'Encorajamos nossos clientes a fazer escolhas sustentáveis e a compreender sua importância para o meio ambiente.'
    },
    {
      title: 'Parcerias Sustentáveis',
      description: 'Colaboramos com fornecedores comprometidos com práticas ambientais responsáveis.'
    }
  ]
  
  return (
    <section className={styles.sustainabilitySection}>
      <h2>Compromisso com a Sustentabilidade</h2>
      <Hr color='white'/>
      <div className={styles.container}>
        {topics.map((topic, index) => (
          <div key={index} className={styles.topic}>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SustainabilitySection;
