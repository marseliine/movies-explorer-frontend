import React from 'react';
import './AboutMe.css';
import studentPhoto from '../../images/photo.jpg';
import Title from '../Title/Title';

function AboutMe() {
  return (
    <section id={'about-me'} className={'about-me'}>
      <Title text={'Студент'} />
      <div className={'about-me__wrapper'}>
        <p className={'about-me__name'}>Виталий</p>
        <p className={'about-me__job'}>Фронтенд-разработчик, 30 лет</p>
        <p className={'about-me__description'}>
          Я родился и живу в Саратове, закончил факультет экономики СГУ.
          Увлекаюсь программированием и веб-разработкой, и решил развивать свои
          навыки в этой области. Сейчас я прохожу курс по веб-разработке от
          Яндекс Практикума, а этот сайт, который вы просматриваете, станет моей
          дипломной работой.
        </p>
        <img
          className={'about-me__photo'}
          src={studentPhoto}
          alt='Фото студента'
        />
        <a
          target='_blank'
          rel='noreferrer'
          className={'about-me__github-link'}
          href='https://github.com/marseliine'
        >
          Github
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
