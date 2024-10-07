import React, { useState } from 'react';
import styles from './index.module.scss';

// import box from '../../../Assets/box.jpg';
// import sacada from '../../../Assets/sacada.jpg';
import telhado from '../../../Assets/telhado.jpg';
import fachada from '../../../Assets/fachada.jpg';
import gazebo from '../../../Assets/gazebo.jpg';
// import temperados from '../../../Assets/temperado.jpg';
// import espelhos from '../../../Assets/espelho.jpg';
// import cobertura from '../../../Assets/cobertura.jpg';
// import aluminio from '../../../Assets/aluminio.jpg';
// import divisoria from '../../../Assets/divisoria.jpg';
// import elevador from '../../../Assets/elevador.jpg';
// import reparos from '../../../Assets/reparos.jpg';
// import personalizados from '../../../Assets/personalizado.jpg';
// import decorativos from '../../../Assets/decorativos.jpg';
// import porta from '../../../Assets/portas.jpg';
// Componente de Galeria
const GalleryModal = ({ service, onClose }) => {
  if (!service) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <h2>{service.name}</h2>
        <div className={styles.imageGrid}>
          {service.images.map((image, index) => (
            <img key={index} src={image} alt={service.name} />
          ))}
        </div>
        <button className={styles.closeButton} onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

const ServiceGrid = () => {
  const services = [
    { name: 'Telhado de Vidro', image: telhado, images: ['path/to/gallery1.jpg', 'path/to/gallery2.jpg'] },
    { name: 'Fachada de Vidro', image: fachada, images: ['path/to/gallery3.jpg', 'path/to/gallery4.jpg'] },
    { name: 'Gazebo de Vidro', image: gazebo, images: ['path/to/gallery5.jpg', 'path/to/gallery6.jpg'] },
    { name: 'Telhado de Vidro', image: 'path/to/image1.jpg', images: ['path/to/gallery1.jpg', 'path/to/gallery2.jpg'] },
    { name: 'Fachada de Vidro', image: 'path/to/image2.jpg', images: ['path/to/gallery3.jpg', 'path/to/gallery4.jpg'] },
    { name: 'Gazebo de Vidro', image: 'path/to/image3.jpg', images: ['path/to/gallery5.jpg', 'path/to/gallery6.jpg'] },
    { name: 'Telhado de Vidro', image: 'path/to/image1.jpg', images: ['path/to/gallery1.jpg', 'path/to/gallery2.jpg'] },
    { name: 'Fachada de Vidro', image: 'path/to/image2.jpg', images: ['path/to/gallery3.jpg', 'path/to/gallery4.jpg'] },
    { name: 'Gazebo de Vidro', image: 'path/to/image3.jpg', images: ['path/to/gallery5.jpg', 'path/to/gallery6.jpg'] },
    { name: 'Telhado de Vidro', image: 'path/to/image1.jpg', images: ['path/to/gallery1.jpg', 'path/to/gallery2.jpg'] },
    { name: 'Fachada de Vidro', image: 'path/to/image2.jpg', images: ['path/to/gallery3.jpg', 'path/to/gallery4.jpg'] },
    { name: 'Gazebo de Vidro', image: 'path/to/image3.jpg', images: ['path/to/gallery5.jpg', 'path/to/gallery6.jpg'] },
    { name: 'Telhado de Vidro', image: 'path/to/image1.jpg', images: ['path/to/gallery1.jpg', 'path/to/gallery2.jpg'] },
    { name: 'Fachada de Vidro', image: 'path/to/image2.jpg', images: ['path/to/gallery3.jpg', 'path/to/gallery4.jpg'] },
    { name: 'Gazebo de Vidro', image: 'path/to/image3.jpg', images: ['path/to/gallery5.jpg', 'path/to/gallery6.jpg'] },
    
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
          <h3 className={styles.serviceName}>{service.name}</h3>
        </div>
      ))}
      
      <GalleryModal service={selectedService} onClose={handleClose} />
    </div>
  );
};

export default ServiceGrid;
