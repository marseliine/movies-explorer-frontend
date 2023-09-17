import React from 'react';
import { Link } from 'react-router-dom';
import useValidation from '../../hooks/useValidation';
import './Login.css';

function Login() {
  const {
    value,
    handleChange,
    error,
    isValid,
  } = useValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="login">
      <div className="login__container">
        <Link to="/" className="login__logo" alt="logo">
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form login__form_place_login" onSubmit={handleSubmit}>
          <label className="login__label">
            <span className="login__label-text">Email</span>
            <input
              className="login__input"
              type="email"
              name="email"
              required
              value={value.email || ''}
              onChange={handleChange}
            />
            <span className="login__error-message">{error.email}</span>
          </label>
          <label className="login__label">
            <span className="login__label-text">Пароль</span>
            <input
              className="login__input login__input_type_password"
              type="password"
              name="password"
              required
              value={value.password || ''}
              onChange={handleChange}
            />
            <span className="login__error-message">{error.password}</span>
          </label>
          <div className="login__submit-block">
            <button
              className={`button-hover login__submit-button ${isValid ? '' : 'login__submit-button_disabled'}`}
              type="submit"
              disabled={!isValid}
            >
              Войти
            </button>
            <p className="login__register-text">
              Ещё не зарегистрированы?{" "}
              <Link to="/sign-up" className="link login__link">
                Регистрация
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
