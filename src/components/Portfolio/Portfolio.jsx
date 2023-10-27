import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className={'portfolio'}>
      <h2 className={'portfolio__title'}>Портфолио</h2>
      <nav className={'portfolio-nav'}>
        <ul className={'portfolio-list'}>
          <li className={'portfolio-list__item'}>
            <a
              target='_blank'
              rel='noreferrer'
              className={'portfolio__link'}
              href='https://github.com/marseliine/how-to-learn'
            >
              <span>Статичный сайт</span>
              <span className={'portfolio__link-arrow'}> ↗ </span>
            </a>
          </li>
          <li className={'portfolio-list__item'}>
            <a
              target='_blank'
              rel='noreferrer'
              className={'portfolio__link'}
              href='https://github.com/marseliine/russian-travel'
            >
              <span>Адаптивный сайт</span>
              <span className={'portfolio__link-arrow'}> ↗ </span>
            </a>
          </li>
          <li className={'portfolio-list__item'}>
            <a
              target='_blank'
              rel='noreferrer'
              className={'portfolio__link'}
              href='https://github.com/marseliine/react-mesto-api-full-gha'
            >
              <span>Одностраничное приложение</span>
              <span className={'portfolio__link-arrow'}> ↗ </span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
