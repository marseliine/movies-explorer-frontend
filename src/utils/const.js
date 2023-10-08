import film1 from '../images/film1.png';
import film2 from '../images/film2.png';
import film3 from '../images/film3.png';
import film4 from '../images/film4.png';
import film5 from '../images/film5.png';
import film6 from '../images/film6.png';
import film7 from '../images/film7.png';
import film8 from '../images/film8.png';
import film9 from '../images/film9.png';
import film10 from '../images/film10.png';
import film11 from '../images/film11.png';
import film12 from '../images/film12.png';

export const registerConfig = {
  type: 'register',
  title: 'Добро пожаловать!',
  buttonText: 'Зарегистрироваться',
  relocationText: 'Уже зарегистрированы?',
  relocationRoute: '/signin',
  relocationLink: 'Войти',
};

export const loginConfig = {
  type: 'login',
  title: 'Рады видеть!',
  buttonText: 'Войти',
  relocationRoute: '/signup',
  relocationLink: 'Регистрация',
  relocationText: 'Ещё не зарегистрированы?',
};

export const user = {
  name: 'Виталий',
  email: 'pochta@yandex.ru',
};

export const cardList = [
  {
    country: 'USA',
    director: 'Director',
    duration: 77,
    year: 2020,
    description: '',
    link: `${film1}`,
    movieId: 1,
    nameRU: '33 слова о дизайне',
    nameEN: '33 words about design',
  },
  {
    country: 'USA',
    director: 'Director',
    duration: 77,
    year: 2020,
    description: '',
    link: `${film2}`,
    movieId: 2,
    nameRU: 'Киноальманах «100 лет дизайна»',
    nameEN: 'Film almanac “100 years of design',
  },
  {
    country: 'USA',
    director: 'Director',
    duration: 77,
    year: 2020,
    description: '',
    link: `${film3}`,
    movieId: 3,
    nameRU: 'В погоне за Бенкси',
    nameEN: 'Chasing Banksy',
  },
  {
    country: 'USA',
    director: 'Director',
    duration: 77,
    year: 2020,
    description: '',
    link: `${film4}`,
    movieId: 4,
    nameRU: 'Баския: Взрыв реальности',
    nameEN: 'Basquiat: Explosion of reality',
  },
  {
    country: 'USA',
    director: 'Director',
    duration: 77,
    year: 2020,
    description: '',
    link: `${film5}`,
    movieId: 5,
    nameRU: 'Бег это свобода»',
    nameEN: 'Running is freedom',
  },
  {
    country: 'USA',
    director: 'Director',
    duration: 77,
    year: 2020,
    description: '',
    link: `${film6}`,
    movieId: 6,
    nameRU: 'Книготорговцы',
    nameEN: 'Booksellers',
  },
  {
    country: 'USA',
    director: 'Director',
    duration: 77,
    year: 2020,
    description: '',
    link: `${film7}`,
    movieId: 7,
    nameRU: 'Когда я думаю о Германии ночью',
    nameEN: 'When I think about Germany at night',
  },
  {
    country: 'USA',
    director: 'Director',
    duration: 77,
    year: 2020,
    description: '',
    link: `${film8}`,
    movieId: 8,
    nameRU: 'Gimme Danger: История Игги и The',
    nameEN: 'Gimme Danger: Iggi`s story and The Stooges',
  },
  {
    country: 'USA',
    director: 'Director',
    duration: 77,
    year: 2020,
    description: '',
    link: `${film9}`,
    movieId: 9,
    nameRU: 'Дженис: Маленькая девочка грустит',
    nameEN: 'Janice: The little girl is upset',
  },
  {
    country: 'USA',
    director: 'Director',
    duration: 77,
    year: 2020,
    description: '',
    link: `${film10}`,
    movieId: 10,
    nameRU: 'Соберись перед прыжком',
    nameEN: 'Get ready before you jump',
  },
  {
    country: 'USA',
    director: 'Director',
    duration: 77,
    year: 2020,
    description: '',
    link: `${film11}`,
    movieId: 11,
    nameRU: 'Пи Джей Харви: A dog called money',
    nameEN: 'P.J. Harvey: A dog called money',
  },
  {
    country: 'USA',
    director: 'Director',
    duration: 77,
    year: 2020,
    description: '',
    link: `${film12}`,
    movieId: 12,
    nameRU: 'По волнам: Искусство звука в кино',
    nameEN: 'Along the Waves: The Art of Sound in Cinema',
  },

];

export const savedCardList = [
  {
    country: 'USA',
    director: 'Director',
    duration: 77,
    year: 2020,
    description: '',
    ilink: `${film3}`,
    movieId: 1,
    nameRU: '33 слова о дизайне',
    nameEN: '33 words about design',
  },
  {
    country: 'USA',
    director: 'Director',
    duration: 77,
    year: 2020,
    description: '',
    link: `${film7}`,
    movieId: 2,
    nameRU: 'Киноальманах «100 лет дизайна»',
    nameEN: 'Film almanac “100 years of design',
  },
  {
    country: 'USA',
    director: 'Director',
    duration: 77,
    year: 2020,
    description: '',
    link: `${film11}`,
    movieId: 3,
    nameRU: 'В погоне за Бенкси',
    nameEN: 'Chasing Banksy',
  },
];
