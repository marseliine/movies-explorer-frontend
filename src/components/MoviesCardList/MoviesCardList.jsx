import { MovieCard } from '../MovieCard/MovieCard';
import styles from './MoviesCardList.module.css';
import {movies} from '../../utils/cards.js';

const MoviesCardList = ({ device }) => {
  let cards;

  switch (device) {
    case 'mobile':
      cards = movies
        .slice(0, 5)
        .map(movie => (<MovieCard key={movie.id} movie={movie} page="movies" />));
      break
    case 'tablet':
      cards = movies
        .slice(0, 8)
        .map(movie => (<MovieCard key={movie.id} movie={movie} page="movies" />));
      break
    case 'desktop':
      cards = movies
        .slice(0, 16)
        .map(movie => (<MovieCard key={movie.id} movie={movie} page="movies" />));
      break
    default:
      cards = null;
  }

  return (
    <section className={`${styles.movies__cardList} container ${device === 'mobile' ? 'container--promo' : ''}`}>
      {
        movies ? cards : <h2>Фильмов не найдено!</h2>
      }
    </section>
  )
}

export default MoviesCardList;