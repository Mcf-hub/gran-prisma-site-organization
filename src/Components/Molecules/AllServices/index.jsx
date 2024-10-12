import React from 'react';
import styles from './index.module.scss';
import box from '../../../Assets/box.jpg';
import portas from '../../../Assets/porta2.jpg'
import janela from '../../../Assets/janela.jpg'
import sacada from '../../../Assets/sacada.jpg';
import telhado from '../../../Assets/telhado.jpg';
import fachada from '../../../Assets/fachada2.jpg';
import gazebo from '../../../Assets/gazebo2.jpg';
import temperados from '../../../Assets/temperado.jpg';
import espelhos from '../../../Assets/espelho.jpg';
import cobertura from '../../../Assets/cobertura.jpg';
import aluminio from '../../../Assets/aluminio.jpg';
import divisoria from '../../../Assets/divisoria.jpg';
import elevador from '../../../Assets/elevador.jpg';
import reparos from '../../../Assets/reparos.jpg';
import personalizados from '../../../Assets/personalizado.jpg';
import decorativos from '../../../Assets/decorativos.jpg';
import porta from '../../../Assets/portas.jpg';



const services = [
  {
    name: 'Box Elegance',
    description: 'Simplicidade e sofisticação em cada detalhe! Box de vidro sob medida, trazendo mais luminosidade e elegância ao seu banheiro. Uma solução prática e estilosa para transformar seu ambiente.',
    image: box,
  },
  {
    name: 'Portas',
    description: 'Combinam elegância e modernidade, trazendo mais luz natural e amplitude ao ambiente. Oferecemos modelos como portas de correr, pivotantes e de abrir, com vidro temperado ou laminado, garantindo segurança e estilo. Nossas portas podem ser personalizadas conforme a necessidade do cliente.',
    image: portas,
  },
  {
    name: 'Janelas',
    description: 'São ideais para iluminar e ventilar os ambientes, além de proporcionar isolamento acústico e térmico. Trabalhamos com vários estilos, como janelas de correr e maxim-ar, usando vidros de alta resistência, como temperado e laminado, sempre priorizando segurança e conforto.',
    image: janela,
  },
  {
    name: 'Sacadas',
    description: 'Ofereça proteção e elegância para sua sacada com vidros de alta qualidade, garantindo segurança e um visual moderno ao seu ambiente. Transforme sua sacada em um espaço sofisticado e funcional.',
    image: sacada,
  },
  {
    name: 'Telhado',
    description: 'Proporcionamos soluções de telhados de vidro que permitem iluminação natural, mantendo a proteção e o conforto térmico. Ideal para varandas, áreas de lazer e espaços comerciais.',
    image: telhado,
  },
  {
    name: 'Fachada',
    description: 'Destaque seu imóvel com fachadas de vidro elegantes e modernas. Nossas soluções garantem visibilidade, segurança e estilo, agregando valor ao seu projeto arquitetônico.',
    image: fachada,
  },
  {
    name: 'Gazebo',
    description: 'Crie um espaço único e encantador em seu jardim ou área de lazer com um gazebo de vidro, combinando sofisticação e funcionalidade para momentos de relaxamento.',
    image: gazebo,
  },
  {
    name: 'Vidros Temperados e Laminados',
    description: 'Oferecemos vidros temperados e laminados para garantir a segurança e o conforto dos seus projetos, com design moderno e alta resistência.',
    image: temperados,
  },
  {
    name: 'Espelhos',
    description: 'Personalize seus ambientes com espelhos sob medida, criando a ilusão de mais espaço e luminosidade. Uma escolha prática e elegante para residências e empresas.',
    image: espelhos,
  },
  {
    name: 'Coberturas em Vidro e Policarbonato',
    description: 'Nossas coberturas proporcionam proteção contra o clima sem comprometer a estética. Soluções ideais para varandas, garagens e áreas comerciais.',
    image: cobertura,
  },
  {
    name: 'Esquadrias de Alumínio',
    description: 'Instale esquadrias de alumínio que combinam durabilidade, design moderno e isolamento térmico e acústico. Perfeitas para projetos residenciais e comerciais.',
    image:aluminio,
  },
  {
    name: 'Divisórias de Vidro',
    description: 'As divisórias de vidro são a solução perfeita para criar ambientes integrados e ao mesmo tempo garantir privacidade. Estilosas e funcionais para qualquer espaço.',
    image:divisoria,
  },
  {
    name: 'Reparos e Manutenção',
    description: 'Garantimos o bom funcionamento e a longevidade dos seus vidros e esquadrias com serviços completos de reparos e manutenção, assegurando sua segurança.',
    image:reparos,
  },
  {
    name: 'Projetos Personalizados',
    description: 'Realizamos projetos personalizados em vidro, trazendo soluções criativas e únicas para atender às suas necessidades e transformar seus espaços.',
    image: personalizados,
  },
  {
    name: 'Vidros Decorativos',
    description: 'Agregue estilo e sofisticação aos seus ambientes com vidros decorativos, oferecendo uma variedade de padrões e acabamentos que refletem sua personalidade.',
    image:decorativos,
  },
  {
    name: 'Portas de Loja e Ferro Automatizada',
    description: 'Oferecemos portas de loja e sistemas automatizados em ferro para garantir segurança, praticidade e modernidade para seu estabelecimento.',
    image:porta,
  },
  {
    name: 'Elevador com Fachada de Vidro',
    description: 'Transforme a aparência do seu prédio com fachadas de elevadores em vidro, combinando modernidade e transparência. Uma solução que oferece visibilidade, estilo e segurança, elevando a estética do ambiente ao próximo nível.',
    image: elevador,
  },
  
];

const AllServices = () => {
  return (
    <div className={styles.servicesContainer}>
      {services.map((service, index) => (
        <div
          key={index}
          className={`${styles.serviceItem} ${index % 2 === 0 ? styles.normal : styles.reversed}`}
        >
          <div className={styles.serviceImage}>
            <img src={service.image} alt={service.name} />
          </div>
          <div className={styles.serviceText}>
            <h2 translate='no' >{service.name}</h2>
            <p translate='no'>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllServices;
