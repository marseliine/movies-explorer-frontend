import { useState } from "react";
import styles from './MoviesFormSwitch.module.css';

const MoviesFormSwitch = () => {
  const [isFiltered, setIsFiltered] = useState(true);
  return (
    <div className={styles.movies__filter}>
      <button
        type="button"
        onClick={() => setIsFiltered(!isFiltered)}
        className={`
          ${styles['movies__filter-checkbox']}
          ${isFiltered ? styles.filtered : ''}
        `}>
        <div className={styles['movies__filter-switch']}></div>
      </button>
      <span className={styles['movies__filter-label']}>Короткометражки</span>
    </div>
  );
};

export default MoviesFormSwitch;