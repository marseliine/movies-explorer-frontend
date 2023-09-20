import { useRef } from 'react';
import { ReactComponent as SendFormIcon } from './send-form-icon.svg';
import MoviesFormSwitch from './MoviesFormSwitch';
import styles from './MoviesForm.module.css';

const MoviesForm = () => {
  const searchInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchInputRef.current.value = '';
  }

  return (
    <section className={`${styles['movies__form-wrapper']} container`}>
      <form
        className={styles.movies__form}
        onSubmit={handleSubmit}>
        <div className={styles['movies__form-field']}>
          <input
            type="search"
            name="movie search"
            className={styles['movies__form-searchInput']}
            id="movie-search-input"
            ref={searchInputRef}
            required={true}
            placeholder='Фильм' />
          <button
            type="submit"
            className={`${styles['movies__form-submitButton']}`}>
            <SendFormIcon />
          </button>
        </div>
        <MoviesFormSwitch />
      </form>
    </section>
  );
};

export default MoviesForm;