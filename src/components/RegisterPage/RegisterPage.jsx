import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import InputWarning from '../InputWarning/InputWarning';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const formRef = useRef(null);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.value = 'Виталий';
    emailInputRef.current.value = 'pochta@yandex.ru';
    passwordInputRef.current.value = 'g8429jfweribzc';
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    formRef.current.reset();
  }

  return (
    <main className={`${styles.register} centered container container--register`}>
      <div className={styles.header}>
        <Link to="/" className={styles.header__logo}>
          <Logo />
        </Link>
        <h1 className={styles.header__title}>Добро пожаловать!</h1>
      </div>
      <form className={styles.register__form} ref={formRef}>
        <label
          htmlFor='name-input'
          className={styles['register__form-label']}
          data-error={false}>
          Имя
          <input
            type="text"
            name="name"
            id="name-input"
            ref={nameInputRef}
            required={true}
            min={3}
            max={24}
            placeholder='Виталий'
            className={styles['register__form-input']} />
          {false && <InputWarning />}
        </label>
        <label
          htmlFor='email-input'
          className={styles['register__form-label']}
          data-error={false}>
          E-mail
          <input
            type="email"
            name="email"
            id="email-input"
            ref={emailInputRef}
            required={true}
            placeholder='pochta@yandex.ru'
            className={styles['register__form-input']} />
          {false && <InputWarning />}
        </label>
        <label
          htmlFor='password-input'
          className={styles['register__form-label']}
          data-error={true}>
          Пароль
          <input
            type="password"
            name="password"
            id="password-input"
            ref={passwordInputRef}
            required={true}
            min={6}
            max={20}
            placeholder='g8429jfweribzc'
            className={styles['register__form-input']} />
          {true && <InputWarning />}
        </label>
        <button
          type="submit"
          className={styles['register__form-submitButton']}
          onClick={handleSubmit}>
          Зарегистрироваться
        </button>
        <p className={styles['register__form-login']}>
          Уже зарегистрированы?
          <Link to="/signin" className={styles['register__form-loginButton']}>Войти</Link>
        </p>
      </form>
    </main>
  );
};

export default RegisterPage;