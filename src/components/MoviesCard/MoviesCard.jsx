import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movieData }) {
  const [isLiked, setIsLiked] = useState(false);

  const { pathname } = useLocation();

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };


  return (
    <li className="movie-card">
      <img className="movie-card__image" src={movieData.link} alt={movieData.title} />
      <div className='movie-card__container'>
        <div className='movie-card__info'>
          <h2 className="movie-card__title">{movieData.title}</h2>
          <p className="movie-card__duration">{movieData.duration}</p>
        </div>
        {/* {
          pathname === '/saved-movies' && (
            <button
              type="button"
              className="buton-hover movie-card__delete"
              aria-label="Удалить"
            />
          )
        } */}
        <button
          className={`button-hover movie-card__like ${isLiked ? 'movie-card__like_active' : ''} ${movieData.delete}`}
          type="button"
          onClick={handleLikeClick}
        ></button>
      </div>
    </li>
  );
}

export default MoviesCard;
