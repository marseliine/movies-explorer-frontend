import { Link } from 'react-router-dom';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  return (
    <main className={`${styles.profile} container container--profile`}>
      <h1 className={styles.profile__title}>Привет, Екатерина!</h1>
      <table className={styles.profile__table}>
        <tbody>
          <tr className={styles['profile__table-row']}>
            <th>Имя</th>
            <td>Виталий</td>
          </tr>
          <tr className={`
            ${styles['profile__table-row']}
            ${styles['profile__table-row--last']}
          `}>
            <th>E-mail</th>
            <td>kizikovaek@yandex.ru</td>
          </tr>
        </tbody>
      </table>
      <div className={`${styles.profile__actions} centered`}>
        <button type="button" className={`${styles.profile__editButton} btn btn--regular`}>Редактировать</button>
        <Link to="/signin" className={styles.profile__logoutButton}>Выйти из аккаунта</Link>
      </div>
    </main>
  );
};

export default ProfilePage;