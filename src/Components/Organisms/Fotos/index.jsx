import React, { useState } from 'react';
import styles from './index.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import box from '../../../Assets/box.jpg';
import box2 from '../../../Assets/box1.jpg';
import box3 from '../../../Assets/box2.jpg';
import box4 from '../../../Assets/box3.jpg';
import box5 from '../../../Assets/box5.jpg';

import portas from '../../../Assets/porta2.jpg'
import portas2 from '../../../Assets/porta.jpg'
import portas3 from '../../../Assets/portas3.jpg'

import janela from '../../../Assets/janela.jpg'
import janela2 from '../../../Assets/janela2.jpg'


import sacada from '../../../Assets/sacada.jpg';
import sacada2 from '../../../Assets/sacada2.jpg';

import telhado from '../../../Assets/telhado.jpg';
import telhado2 from '../../../Assets/telhado3.jpg';
import telhado3 from '../../../Assets/telhado4.jpg';
import telhado4 from '../../../Assets/telhado5.jpg';

import fachada from '../../../Assets/fachada.jpg';
import fachada2 from '../../../Assets/fachada2.jpg';
import fachada3 from '../../../Assets/fachada3.jpg';
import fachada4 from '../../../Assets/fachada4.jpg';
import fachada5 from '../../../Assets/fachada5.jpg';
import fachada6 from '../../../Assets/fachada6.jpg';

import gazebo from '../../../Assets/gazebo.jpg';
import gazebo2 from '../../../Assets/gazebo2.jpg';
import gazebo3 from '../../../Assets/gazebo3.jpg';
import gazebo4 from '../../../Assets/gazebo4.jpg';

import espelhos from '../../../Assets/espelho.jpg';

import cobertura from '../../../Assets/cobertura.jpg';

import aluminio from '../../../Assets/esquadria.jpg';
import aluminio2 from '../../../Assets/esquadria2.jpg';

import pvc from '../../../Assets/esquadriapvc.jpg'

import divisoria from '../../../Assets/divisoria.jpg';

import elevador from '../../../Assets/elevador.jpg';

import personalizados from '../../../Assets/personalizado.jpg';
import personalizados2 from '../../../Assets/personalizado1.jpg';
import personalizados3 from '../../../Assets/personalizado2.jpg';

import decorativos from '../../../Assets/decorativos.jpg';
import porta from '../../../Assets/portas.jpg';


const GalleryModal = ({ service, onClose }) => {
  if (!service) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <FontAwesomeIcon
          icon={faX}
          className={styles.closeButton}
          onClick={onClose}
        />
        <h2>{service.name}</h2>
        <div className={styles.imageGrid}>
          {service.images.map((image, index) => (
            <img key={index} src={image} alt={service.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceGrid = () => {
  const services = [
    { name: 'Box Elegance', image: box, images: [box2, box3, box4,box5] },
    { name: 'Portas', image: portas, images: [portas2, portas3] },
    { name: 'Janelas', image: janela, images: [janela2] },
    { name: 'Sacadas', image: sacada, images: [sacada2] },
    { name: 'Telhado', image: telhado, images: [telhado2, telhado3, telhado4] },
    { name: 'Fachada', image: fachada, images: [fachada2,fachada3,fachada4,fachada5,fachada6] },
    { name: 'Gazebo', image: gazebo, images: [gazebo2, gazebo3, gazebo4] },
    { name: 'Espelhos', image:espelhos, images: [] },
    { name: 'Coberturas em Vidro e Policarbonato', image:cobertura, images: [] },
    { name: 'Esquadrias de Alumínio', image: aluminio, images: [aluminio2] },
    { name: 'Esquadrias de PVC', image: pvc, images: [] },
    { name: 'Divisórias de Vidro', image:divisoria, images: [] },
    { name: 'Projetos Personalizados', image:personalizados, images: [personalizados2, personalizados3] },
    { name: 'Vidros Decorativos', image:decorativos, images: [] },
    { name: 'Portas de Loja e Ferro Automatizada', image:porta, images: [] },
    { name: 'Elevador com Fachada de Vidro', image:elevador, images: [] },
  ];

  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  return (
    <div className={styles.gridContainer}>
      {services.map((service, index) => (
        <div 
          key={index} 
          className={styles.serviceItem} 
          onClick={() => handleServiceClick(service)}
        >
          <img src={service.image} alt={service.name} className={styles.serviceImage} />
          <h3 translate='no'className={styles.serviceName}>{service.name}</h3>
        </div>
      ))}
      
      <GalleryModal service={selectedService} onClose={handleClose} />
    </div>
  );
};

export default ServiceGrid;
