import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import logo from '../../../Assets/logopng.png'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Gran Prisma" />
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quem-somos">Quem Somos</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/fotos">Fotos</Link>
          </li>
          <li>
            <Link to="/contato" className={styles.contactBtn}>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
