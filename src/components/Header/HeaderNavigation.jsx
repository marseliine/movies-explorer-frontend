import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.css'

export const HeaderNavigation = ({handleToggleMenu, showOnGadgets}) => {
  return (
    <nav className={styles.header__navigation}>
      {
        showOnGadgets &&
          <NavLink
            to="/"
            onClick={handleToggleMenu}
            className={({ isActive, isPending }) =>
              isPending ? `${styles.pending}` : isActive ? `${styles.active}` : ""}>
            Главная
          </NavLink>
      }
      <NavLink
        to="/movies"
        onClick={handleToggleMenu}
        className={({ isActive, isPending }) =>
          isPending ? `${styles.pending}` : isActive ? `${styles.active}` : ""}>
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        onClick={handleToggleMenu}
        className={({ isActive, isPending }) =>
          isPending ? `${styles.pending}` : isActive ? `${styles.active}` : ""}>
        Сохранённые фильмы
      </NavLink>
    </nav>
  );
};