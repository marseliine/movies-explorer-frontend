import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as RemoveIcon } from './cross-icon.svg';
import styles from './MovieCard.module.css';

export const MovieCard = ({movie, page}) => {
  const [isFavorite, setIsFavorite] = useState(movie.favorite);
  
  return (
    <div
      id={movie.url}
      className={`
        ${styles.movie}
        ${page === 'saved' ? styles['movie--saved'] : ''}
    `}>
      <Link to={`/movies/${movie.url}`} className={`${styles.movie__preview} centered`}>
        <img src={movie.link} alt={movie.title} />
      </Link>
      <div className={styles.movie__body}>
        <div className={styles['movie__body-top']}>
          <Link to={`/movies/${movie.link}`} className={styles.movie__name}>
            {movie.title}
          </Link>
          {
            page !== 'saved' && (
              isFavorite ?
                <button
                  type='button'
                  className={`${styles.movie__favorite} ${styles.active}`}
                  onClick={() => {setIsFavorite(!isFavorite)}}>
                </button>
                :
                <button
                  type='button'
                  className={styles.movie__favorite}
                  onClick={() => {setIsFavorite(!isFavorite)}}>
                </button>
            )
          }
          {
            page === 'saved' &&
              <button
                type="button"
                className={`${styles.removeButton} centered`}
                onClick={() => setIsFavorite(false)}>
                <RemoveIcon />
              </button>
          }
        </div>
        <span className={styles.movie__length}>{movie.length}</span>
      </div>
    </div>
  );
};