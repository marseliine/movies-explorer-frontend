import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={`${styles.portfolio} ${styles['portfolio--aboutMe']}`}>
      <h3 className={styles.portfolio__title}>Портфолио</h3>
      <ul className={styles.portfolio__links}>
        <li>
          <a
            href="https://github.com/marseliine/how-to-learn"
            target="_blank"
            rel="noreferrer"
            className={styles.portfolio__link}>
            Статичный сайт
            <span className={styles['portfolio__link-arrow']}>↗</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/marseliine/russian-travel"
            target="_blank"
            rel="noreferrer"
            className={styles.portfolio__link}>
            Адаптивный сайт
            <span className={styles['portfolio__link-arrow']}>↗</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/marseliine/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
            className={styles.portfolio__link}>
            Одностраничное приложение
            <span className={styles['portfolio__link-arrow']}>↗</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;