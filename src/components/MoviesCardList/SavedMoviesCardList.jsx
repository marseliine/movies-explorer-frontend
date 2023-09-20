import { MovieCard } from '../MovieCard/MovieCard';
import styles from './MoviesCardList.module.css';
import {movies} from '../../utils/cards.js';

const MoviesCardList = ({ device }) => {
  let cards;
  switch (device) {
    case 'mobile':
      cards = movies
        .filter(movie => movie.favorite)
        .slice(0, 2)
        .map(movie => (<MovieCard key={movie.id} movie={movie} page={'saved'} />));
      break
    case 'tablet':
      cards = movies
        .filter(movie => movie.favorite)
        .slice(0, 3)
        .map(movie => (<MovieCard key={movie.id} movie={movie} page={'saved'} />));
      break
    case 'desktop':
      cards = movies
        .filter(movie => movie.favorite)
        .slice(0, 16)
        .map(movie => (<MovieCard key={movie.id} movie={movie} page={'saved'} />));
      break
    default:
      cards = null;
  }

  return (
    <section className={`${styles.movies__cardList} container`}>
      {
        movies ? cards : <h2>Фильмов не найдено!</h2>
      }
    </section>
  )
}

export default MoviesCardList;