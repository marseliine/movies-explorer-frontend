import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import InputWarning from '../InputWarning/InputWarning';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const formRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current.value = 'pochta@yandex.ru';
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
        <h1 className={styles.header__title}>Рады видеть!</h1>
      </div>
      <form className={styles.register__form} ref={formRef}>
        <label
          htmlFor='email-input'
          className={styles['register__form-label']}
          data-error={false}>
          E-mail
          <input
            type="email"
            name="email"
            id="email-input"
            required={true}
            ref={emailInputRef}
            placeholder='Виталий'
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
          {false && <InputWarning />}
        </label>
        <button
          type="submit"
          className={styles['register__form-submitButton']}
          onClick={handleSubmit}>
          Войти
        </button>
        {/* Можно вынести в отдельный компонент и в зависимости от модификатора\страницы выводить разные данные */}
        <p className={styles['register__form-login']}>
          Ещё не зарегистрированы?
          <Link to="/signup" className={styles['register__form-loginButton']}>Регистрация</Link>
        </p>
      </form>
    </main>
  );
};

export default LoginPage;