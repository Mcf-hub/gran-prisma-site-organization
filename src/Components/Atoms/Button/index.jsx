import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss'; // Importando o SCSS como módulo

const Button = ({ label, onClick, to, variant = 'default' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (to) {
      navigate(to); 
      window.scrollTo(0, 0);
    }
  };

  return (
    <button className={`${styles.customButton} ${styles[variant]}`} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
