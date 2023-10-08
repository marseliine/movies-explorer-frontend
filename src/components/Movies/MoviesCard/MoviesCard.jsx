import React, { useState } from 'react';
import { savedCardList } from '../../../utils/const';
import { useMediaQuery } from 'react-responsive';


function MoviesCard({ movieId, duration, image, name, isSavedPage }) {
  const isSavedMovieCard = savedCardList.some((i) => i.movieId === movieId);
  const [isSaved, setIsSaved] = useState(isSavedMovieCard);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 400 });


  function toggleSave() {
    if (!isSaved) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  function handleCheckmarkClick() {
    setIsSaved(false);
    if (isSavedPage) {
      console.log('Вы кликнули на крестик');
    }
  }

  function getDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    const hoursText = hours > 0 ? `${hours}ч` : '';
    const minutesText = minutes > 0 ? ` ${minutes}м` : ' 0м';

    return `${hoursText}${minutesText}`;
  }

  return (
    <li className={`card ${isSaved ? 'is-saved' : ''}`}>
      <div className={`card__img-container ${isMobile ? '' : 'with-hover'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {(isHovered || isMobile) && !isSaved && !isSavedPage && (
          <span className="card__save-text" onClick={toggleSave}>
            Сохранить
          </span>
        )}
        {isSaved && !isSavedPage && (
          <div className="card__checkmark card__checkmark-red" onClick={handleCheckmarkClick}>

          </div>
        )}
        {(isHovered || isMobile) && isSavedPage && (
          <div className="card__checkmark card__checkmark-grey" onClick={handleCheckmarkClick}>

          </div>
        )}
        <img src={image} alt={name} className="card__img" />
      </div>
      <div className="card__header">
        <h2 className="card__title">{name}</h2>
        <p className="card__duration">{getDuration(duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
