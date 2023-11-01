import React, { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer.jsx';
import { filterMovies } from '../../utils/filterMovies'

function SavedMovies({ loggedIn, savedMovies, handleDeleteMovie }) {

  const [visibleMovies, setVisibleMovies] = useState(savedMovies);
  const [searchRequest, setSearchRequest] = useState('');
  const [shortMovies, setShortMovies] = useState(false);
  const [notFound, setNotFound] = useState(false);

  function searchedMovies(request) {
    setSearchRequest(request);
  }

  function handleMoviesSwitch() {
    setShortMovies(!shortMovies);
  }

  useEffect(() => {
    if (visibleMovies.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [visibleMovies]);

  useEffect(() => {
    const movieList = filterMovies(savedMovies, searchRequest, shortMovies);
    setVisibleMovies(movieList);
  }, [savedMovies, searchRequest, shortMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <div className='movies__saved-container'>
        <section className="movies__saved">
          <SearchForm
            switchedMovies={handleMoviesSwitch}
            searchedMovies={searchedMovies}
            notFound={notFound}
            page="savedMovies"
          />

          <MoviesCardList
            movies={visibleMovies}
            isSavedMovies={true}
            savedMovies={savedMovies}
            handleDeleteMovie={handleDeleteMovie}
            notFound={notFound}
          />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default SavedMovies;