import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer.jsx';
import { moviesApi } from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/filterMovies'
import Preloader from "../Preloader/Preloader";

function Movies({
  loggedIn,
  handleSaveMovie,
  savedMovies,
  handleDeleteMovie
}) {
  const [startMovies, setStartMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function searchedMovies(request) {
    setIsLoading(true);
    localStorage.setItem('movieRequest', request);
    localStorage.setItem('shortMovies', shortMovies);

    if (localStorage.getItem('allMovies')) {
      const movies = JSON.parse(localStorage.getItem('allMovies'));
      updateVisibleMovies(movies, shortMovies);
      setIsLoading(false);
    } else {
      moviesApi.getMovies().then((moviesData) => {
        localStorage.setItem('allMovies', JSON.stringify(moviesData)); 
        updateVisibleMovies(moviesData, shortMovies);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
  }

  function handleMoviesSwitch() {
    setShortMovies(!shortMovies);
    if (startMovies.length > 0) {
      updateVisibleMovies(startMovies, shortMovies);
      localStorage.setItem('shortMovies', !shortMovies);
    }
  }

  function updateVisibleMovies(movies, short) {
    const visibleMovies = filterMovies(movies, localStorage.getItem('movieRequest'), short);
    setVisibleMovies(visibleMovies);
    setNotFound(visibleMovies.length === 0);
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  useEffect(() => {
    if (localStorage.getItem('shortMovies') === 'true') {
      setShortMovies(true);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('movieRequest')) {
      setNotFound(visibleMovies.length === 0);
    }
  }, [visibleMovies]);

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setStartMovies(movies);
      updateVisibleMovies(movies, shortMovies);
    }
  }, [shortMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="movies">
        <SearchForm
          searchedMovies={searchedMovies}
          shortMovies={shortMovies}
          switchedMovies={handleMoviesSwitch}
          notFound={notFound}
          page="movies"
        />
        {isLoading ? (
          <Preloader />) : (
          <MoviesCardList
            movies={visibleMovies}
            isSavedMovies={false}
            savedMovies={savedMovies}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
            notFound={notFound}
          />
        )}
      </section>
      <Footer />
    </>
  );
}

export default Movies;
