import React, { useState } from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import Hr from '../../Atoms/Hr';

import box from '../../../Assets/boxElegance.jpg';
import fachada from '../../../Assets/fachada.jpg';
import fixoEjanela from '../../../Assets/vidroFixoJanela.jpg';
import telhado from '../../../Assets/telhado.jpg';
import gazebo from '../../../Assets/gazebo.jpg';
import elevador from '../../../Assets/elevador.jpg';


const Gallery = () => {
  const photos = [
    { id: 1, src: box, alt: 'Descrição da Foto 1', link: '/fotos', description: 'Esta é uma imagem representando a primeira descrição.' },
    { id: 2, src: fachada, alt: 'Descrição da Foto 2', link: '/fotos', description: 'Esta é uma imagem representando a segunda descrição.' },
    { id: 3, src: fixoEjanela, alt: 'Descrição da Foto 3', link: '/fotos', description: 'Esta é uma imagem representando a terceira descrição.' },
    { id: 4, src: telhado, alt: 'Descrição da Foto 4', link: '/fotos', description: 'Esta é uma imagem representando a quarta descrição.' },
    { id: 5, src: gazebo, alt: 'Descrição da Foto 5', link: '/fotos', description: 'Esta é uma imagem representando a quinta descrição.' },
    { id: 6, src: elevador, alt: 'Descrição da Foto 6', link: '/fotos', description: 'Esta é uma imagem representando a sexta descrição.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const photosPerPage = 3; // Exibir três imagens de cada vez

  const nextSlide = () => {
    if (currentIndex < photos.length - photosPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.galleryContainer}>
      <h2>Confira nosso trabalho</h2>
      <Hr color="dark"/>
      <div className={styles.slider}>
        <button className={styles.arrow} onClick={prevSlide}>&#8249;</button>
        <div className={styles.photoTrack}>
          {photos.slice(currentIndex, currentIndex + photosPerPage).map((photo) => (
            <div key={photo.id} className={styles.photoWrapper}>
              <Link to={photo.link}>
                <img src={photo.src} alt={photo.alt} className={styles.photo} />
                <span className={styles.description}>{photo.description}</span>
              </Link>
            </div>
          ))}
        </div>
        <button className={styles.arrow} onClick={nextSlide}>&#8250;</button>
      </div>
    </div>
  );
};

export default Gallery;
