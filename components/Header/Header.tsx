import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Мои задачи</h1>
      </div>
    </header>
  );
};
