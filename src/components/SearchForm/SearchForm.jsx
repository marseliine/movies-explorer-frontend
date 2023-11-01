import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({
  shortMovies,
  searchedMovies,
  switchedMovies,
  notFound }) {

  const location = useLocation();
  const [searchRequest, setSearchRequest] = useState('');
  const [searchError, setSearchError] = useState(false);

  function onSubmit(evt) {
    evt.preventDefault();
    if (searchRequest.trim().length === 0) {
      setSearchError(true);
    } else {
      setSearchError(false);
      searchedMovies(searchRequest);
    }
  }

  function handleChangeInput(evt) {
    setSearchRequest(evt.target.value);
  }

  useEffect(() => {
    if (localStorage.getItem('movieRequest') &&
      location.pathname === '/movies') {
      const localSearchRequest = localStorage.getItem('movieRequest');
      setSearchRequest(localSearchRequest);
    }
  }, [location]);


  return (
    <>
      <div className="search-form__center">
        <span className="searchform__error"></span>
        <form className="search-form" onSubmit={onSubmit} noValidate>
          <div className="search-form__container">
            <input className="search-form__input"
              type="text"
              placeholder="Фильм"
              value={searchRequest || ''}
              onChange={handleChangeInput}
              required
            />
            <button
              className="search-form__btn"
              type="submit"
            ></button>
          </div>
        </form>
        {searchError ? (<span className='search-form__error-text'>Введите поисковый запрос</span>
        ) : notFound ? (
          <span className='search-form__error-text'>По вашему запросу ничего не найдено</span>
        ) : (''
        )}
        <div className="search-form__toggle-container">
          <input className="search-form__checkbox"
            type="checkbox"
            id="short-film-toggle"
            checked={shortMovies}
            onChange={switchedMovies}
          />
          <label className="search-form__toggle" htmlFor="short-film-toggle"></label>
          <p className="search-form__short-film-text">Короткометражки</p>
        </div>
      </div>
    </>
  )
}

export default SearchForm;
