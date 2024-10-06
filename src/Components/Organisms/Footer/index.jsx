import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importando o ícone do Instagram
import styles from './index.module.scss';
import logo from '../../../Assets/logopng.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Coluna 1: Logo e Local */}
        <div className={styles.footerColumn}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <p>Localização: Rua Exemplo, 123, Cidade, Estado</p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className={styles.footerColumn}>
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/quem-somos">Quem Somos</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/fotos">Fotos</a></li>
            <li><a href="/contatos">Contatos</a></li>
          </ul>
        </div>

        {/* Coluna 3: Serviços */}
        <div className={styles.footerColumn}>
          <h3>Serviços</h3>
          <ul>
            <li><a href="/servicos#construcao">Construção</a></li>
            <li><a href="/servicos#pintura">Pintura</a></li>
            <li><a href="/servicos#reparos">Reparos</a></li>
            <li><a href="/servicos#design">Design de Interiores</a></li>
            <li><a href="/servicos#decoracao">Decoração</a></li>
          </ul>
        </div>

        {/* Coluna 4: Contato */}
        <div className={styles.footerColumn}>
          <h3>Contato</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:contato@exemplo.com"> contato@exemplo.com</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+5511999999999"> (11) 99999-9999</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
              <a href="https://instagram.com/exemplo" target="_blank" rel="noopener noreferrer"> @exemplo</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
