import styles from './index.module.scss';

const Hr = ({ color }) => {
  const dividerClass = color === 'dark' ? styles.dark : styles.light;

  return (
    <hr className={`${styles.divider} ${dividerClass}`} />
  );
};

export default Hr;
