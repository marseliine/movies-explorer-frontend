import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

const Auth = ({ settings }) => {
  return (
    <form className="form">
      <Link className="form__link" to={'/'}>
        <img className="form__logo" src={logo} alt="Логотип" />
      </Link>
    
      <h1 className="form__title">{settings.title}</h1>
      {settings.type === 'register'
        &&
        <div className="form__input">
          <label className="form__input-label">Имя</label>
          <input className="form__input-field" type="text" placeholder='Введите имя' minLength='2' maxLength='40' required />
          <span className='form__error'>Что-то пошло не так...</span>
        </div>
      }

      <div className="form__input">
        <label className="form__input-label">E-mail</label>
        <input className="form__input-field" type="email" placeholder='Введите email' required />
        <span className='form__error'>Что-то пошло не так...</span>
      </div>

      <div className="form__input">
        <label className="form__input-label">Пароль</label>
        <input className="form__input-field" type="password" placeholder='Введите пароль' minLength='2' maxLength='10' required />
        <span className='form__error form__error_active'>Что-то пошло не так...</span>
      </div>
      {settings.type === 'register'
        &&
      <button className="form__button form__button_space-reg" type="submit">
        {settings.buttonText}
      </button> }
      {settings.type === 'login'
        &&
      <button className="form__button form__button_space-log" type="submit">
        {settings.buttonText}
      </button> }
      <span className="form__button-text">
        {settings.relocationText}
        <Link className="form__button-text-link" to={settings.relocationRoute}>
          {settings.relocationLink}
        </Link>
      </span>

    </form>
  );
};

export default Auth;