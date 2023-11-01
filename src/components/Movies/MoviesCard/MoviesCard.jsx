import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


function MoviesCard({
  movie,
  savedMovies,
  isSavedMovies,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 400 });
  const [isLabelVisible, setIsLabelVisible] = useState();

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  function handleDeleteClick() {
    if (isLabelVisible) {
      handleDeleteMovie(savedMovies.filter((m) => m.movieId === (movie.id).toString())[0]);
      setIsLabelVisible(false);
    }
    else {
      handleDeleteMovie(movie);
      setIsLabelVisible(false);
    }
  }

  function handleSaveClick() {

    handleSaveMovie(movie);
    setIsLabelVisible(true);
  }

  function getDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    const hoursText = hours > 0 ? `${hours}ч` : '';
    const minutesText = minutes > 0 ? ` ${minutes}м` : ' 0м';

    return `${hoursText}${minutesText}`;
  }

  function getImageSrc(movie, isSavedMovies) {
    if (isSavedMovies) {
      return movie.image;
    } else {
      return `https://api.nomoreparties.co/${movie.image.url}`;
    }
  }

  function isMovieInSaved(savedMovies, movie) {
    const movieIdAsString = movie.id.toString();
    return savedMovies.some((savedMovie) => savedMovie.movieId === movieIdAsString);
  }

  useEffect(() => {
    if (location.pathname === '/movies') {
      const isMovieSaved = isMovieInSaved(savedMovies, movie);
      setIsLabelVisible(isMovieSaved);
    } else {
      setIsLabelVisible(false);
    }
  }, [savedMovies, movie, location.pathname]);

  return (
    <li className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`card__img-container ${isMobile ? '' : 'with-hover'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {(isHovered || isMobile) && !isSavedMovies && !isLabelVisible && (
          <button className="card__save-text" type="button" onClick={handleSaveClick}>
            Сохранить
          </button>
        )}
        {isLabelVisible && (
          <button className="card__checkmark-red" onClick={handleDeleteClick}>
          </button>
        )}
        {(isHovered || isMobile) && isSavedMovies && (
          <button className="card__checkmark card__checkmark-grey" onClick={handleDeleteClick}>
          </button>
        )}
        <Link to={movie.trailerLink} target={'_blank'} className="movie__link">
          <img className="card__img"
            src={getImageSrc(movie, isSavedMovies)} alt='movie.nameRU' />
        </Link>
      </div>
      <div className="card__header">
        <h2 className="card__title">{movie.nameRU}</h2>
        <p className="card__duration">{getDuration(movie.duration)}</p>
      </div>
    </li>
  );
}


export default MoviesCard;
