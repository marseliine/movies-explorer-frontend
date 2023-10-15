import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

import {
  MAX_SCREEN_SMALL,
  MAX_SCREEN_MEDIUM,
  MAX_SCREEN_LARGE,
  VISIBLE_ROWS_LARGE,
  VISIBLE_ROWS_MEDIUM,
  VISIBLE_ROWS_SMALL,
  CARDS_ADDING_LARGE,
  CARDS_ADDING_MEDIUM,
  CARDS_ADDING_SMALL,
} from '../../../utils/const';

function MoviesCardList({
  movies,
  savedMovies,
  isSavedMovies,
  handleSaveMovie,
  handleDeleteMovie,
}) {

  const { pathname } = useLocation();
  const [settledVisibleRows, setSettledVisibleRows] = useState(getInitialVisibleRows());

  function getInitialVisibleRows() {
    const windowWidth = window.innerWidth;
    if (windowWidth > MAX_SCREEN_MEDIUM) {
      return VISIBLE_ROWS_LARGE;
    } else if ( (windowWidth <= MAX_SCREEN_MEDIUM) && (windowWidth > MAX_SCREEN_SMALL)) {
      return VISIBLE_ROWS_MEDIUM;
    } else {
      return VISIBLE_ROWS_SMALL;
    }
  }

  function showMoreMovies() {
    const windowWidth = window.innerWidth;
    let addition;

    if (settledVisibleRows < getInitialVisibleRows()) {
      setSettledVisibleRows(getInitialVisibleRows());
      return;
    }
    if (windowWidth <= MAX_SCREEN_SMALL) {
      addition = CARDS_ADDING_SMALL;
    } else if (windowWidth <= MAX_SCREEN_LARGE) {
      addition = CARDS_ADDING_MEDIUM;
    } else {
      addition = CARDS_ADDING_LARGE;
    }

    const newVisibleRows = Math.min(settledVisibleRows + addition, movies.length);

    setSettledVisibleRows(newVisibleRows);

  }

  useEffect(() => {
    const handleResize = () => {
      setSettledVisibleRows(getInitialVisibleRows());
    };

    let resizeTimeout;

    const fixedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        handleResize();
      }, 200);
    };

    handleResize();
    window.addEventListener('resize', fixedResize);

    return () => {
      window.removeEventListener('resize', fixedResize);
    };
  }, []);

  return (
    <>
      <section className="movies-card">
        <ul className="movies-card__list">
          <React.Fragment>
            {pathname === '/saved-movies'
              ? movies.map((movie) => (
                  <MoviesCard
                    key={isSavedMovies ? movie._id : movie.id}
                    movie={movie}
                    savedMovies={savedMovies}
                    isSavedMovies={isSavedMovies}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                ))
              : movies.slice(0, settledVisibleRows).map((movie) => (
                  <MoviesCard
                    key={isSavedMovies ? movie._id : movie.id}
                    movie={movie}
                    savedMovies={savedMovies}
                    isSavedMovies={isSavedMovies}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                ))}
          </React.Fragment>
        </ul>
      </section>
  
      {pathname !== '/saved-movies' && (movies.length > settledVisibleRows) && (
        <div className="movies__container" onClick={showMoreMovies}>
          <button type="button" className="movies__button">
            Еще
          </button>
        </div>
      )}
    </>
  );
  
}

export default MoviesCardList;
