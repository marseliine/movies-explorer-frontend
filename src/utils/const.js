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
  relocationText: 'Ещё не зарегистрированы?',
  relocationRoute: '/signup',
  relocationLink: 'Регистрация',
};

export const MAX_SCREEN_LARGE = 1160;
export const VISIBLE_ROWS_LARGE = 12;
export const CARDS_ADDING_LARGE = 3;

export const MAX_SCREEN_MEDIUM = 769;
export const VISIBLE_ROWS_MEDIUM = 8;
export const CARDS_ADDING_MEDIUM = 2;

export const MAX_SCREEN_SMALL = 480;
export const VISIBLE_ROWS_SMALL = 5;
export const CARDS_ADDING_SMALL = 2;

export const regexName = /^[а-яА-ЯёЁa-zA-Z -]+$/u;
export const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; 
export const regexPassword = /^(?=.*[a-zA-Z0-9_]).{8,16}$/;