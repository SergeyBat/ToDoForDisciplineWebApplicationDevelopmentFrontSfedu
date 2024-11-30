import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <p className={styles.copyright}>&copy; 2024 Мои задачи.</p>
      </div>
    </footer>
  );
};
