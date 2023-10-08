import React from 'react';
import Cards from '../MoviesCard/MoviesCard';

function CardList({ cardList, isSavedPage }) {

  return (
    <section className="movies-card">
      <ul className="movies-card__list">
        {cardList.map((card) => (
          <Cards
            key={card.movieId}
            movieId={card.movieId}
            duration={card.duration}
            image={card.image}
            name={card.nameRU}
            isSavedPage={isSavedPage}
          />
        ))}
      </ul>
    </section>
  );
}

export default CardList;
