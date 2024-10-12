import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'; // Importando o ícone do Instagram
import styles from './index.module.scss';
import logo from '../../../Assets/logopng.png';

const Footer = () => {
 
  const handleWhatsAppClick = () => {
    const phoneNumber = '+5512996430031';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };



  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Coluna 1: Logo e Local */}
        <div className={styles.footerColumn}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className={styles.footerColumn}>
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="/"  translate="no" >Home</a></li>
            <li><a href="/quem-somos">Quem Somos</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/fotos">Fotos</a></li>
            <li><a href="/contatos">Contatos</a></li>
          </ul>
        </div>

        {/* Coluna 3: Serviços */}
        <div className={styles.footerColumn}>
  <h3>Serviços</h3>
  <div className={styles.servicesContainer} translate='no'>
    <ul>
      <li><a href="/servicos#construcao">Box elegance</a></li>
      <li><a href="/servicos#pintura">Fachada</a></li>
      <li><a href="/servicos#reparos">Gazebo</a></li>
      <li><a href="/servicos#design">Sacada</a></li>
      <li><a href="/servicos#decoracao">Vidros temperados e laminados</a></li>
      <li><a href="/servicos#construcao">Espelhos</a></li>
      <li><a href="/servicos#pintura">Coberturas em vidro e policarbonato</a></li>
    </ul>
    <ul>
      <li><a href="/servicos#reparos">Esquadrias de alumínio</a></li>
      <li><a href="/servicos#design">Divisórias de vidro</a></li>
      <li><a href="/servicos#decoracao">Telhado</a></li>
      
      <li><a href="/servicos#pintura">Reparos e manutenção</a></li>
      <li><a href="/servicos#reparos">Projetos personalizados</a></li>
      <li><a href="/servicos#design">Vidros decorativos</a></li>
      <li><a href="/servicos#decoracao">Portas de loja</a></li>
    </ul>
  </div>
</div>

        {/* Coluna 4: Contato */}
        <div className={styles.footerColumn}>
          <h3>Contato</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <a href="mailto:contato@granprisma.com"> contato@granprisma.com</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
              <a href="#" onClick={handleWhatsAppClick}> (12)  99643-0031</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              <a href="https://www.instagram.com/granprisma/" target="_blank" rel="noopener noreferrer"> @granprisma</a>
            </li>
          </ul>

          <div className={styles.location}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
            <p>Campos do Jordão</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;