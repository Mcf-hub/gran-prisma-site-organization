import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './index.module.scss';
import Hr from '../../Atoms/Hr';

import box from '../../../Assets/boxElegance.jpg';
import fachada from '../../../Assets/fachada.jpg';
import fixoEjanela from '../../../Assets/vidroFixoJanela.jpg';
import telhado from '../../../Assets/telhado.jpg';
import gazebo from '../../../Assets/gazebo.jpg';
import elevador from '../../../Assets/elevador.jpg';
import cobertura from '../../../Assets/cobertura.jpg';
import espelho from '../../../Assets/espelho.jpg';                 
import aluminio  from '../../../Assets/esquadria.jpg';                                     

const Gallery = () => {
  const photos = [
    { id: 1, src: box, alt: 'Box Elegance', link: '/fotos', description:'Box Elegance' },
    { id: 2, src: fachada, alt: 'Fachada', link: '/fotos', description: 'Fachada' },
    { id: 3, src: fixoEjanela, alt: 'Vidro Fixo e Janela', link: '/fotos', description:  'Vidro Fixo e Janela' },
    { id: 4, src: telhado, alt: 'Telhado', link: '/fotos', description:'Telhado' },
    { id: 5, src: gazebo, alt: 'Gazebo', link: '/fotos', description:'Gazebo' },
    { id: 6, src: elevador, alt: 'Elevador', link: '/fotos', description:'Elevador' },
    { id: 7, src: cobertura, alt: 'Cobertura', link: '/fotos', description:'Cobertura' },
    { id: 8, src: espelho, alt: 'Espelho', link: '/fotos', description:'Espelho' },
    { id: 9, src: aluminio, alt: 'Esquadria de Alumínio', link: '/fotos', description:'Esquadria de Alumínio' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const photosPerPage = 3; 
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleNavigation = (link) => {
    navigate(link);
    window.scrollTo(0, 0);
  };

  // useEffect para rolar para o topo ao mudar de rota
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={styles.galleryContainer}>
      <h2>Confira nosso trabalho</h2>
      <Hr color="dark"/>
      <div className={styles.slider}>
        <button className={styles.arrow} onClick={prevSlide}>&#8249;</button>
        <div className={styles.photoTrack}>
          {photos.slice(currentIndex, currentIndex + photosPerPage).map((photo) => (
            <div key={photo.id} className={styles.photoWrapper}>
              <div  translate="no"
                onClick={() => handleNavigation(photo.link)}
                className={styles.photoLink} // Nova classe para o link
                role="button" // Indica que é um botão para acessibilidade
                tabIndex={0} // Permite que o div seja focado
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleNavigation(photo.link); // Navegação com Enter
                }}
              >
                <img src={photo.src} alt={photo.alt} className={styles.photo} />
                <span className={styles.description}>{photo.description}</span>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.arrow} onClick={nextSlide}>&#8250;</button>
      </div>
    </div>
  );
};

export default Gallery;
