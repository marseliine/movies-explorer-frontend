import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMobileDetect, useTabletDetect } from '../../hooks/useValidation';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as ProfileIcon } from './profile-icon.svg';
import { ReactComponent as BurgerIcon } from './mobile-menu-icon.svg';
import { ReactComponent as CloseIcon } from './close-icon.svg';
import { HeaderNavigation } from './HeaderNavigation';
import styles from "./Header.module.css";

const Header = ({ currentPage }) => {
    const isMobile = useMobileDetect();
    const isTablet = useTabletDetect();
    const showOnGadgets = isMobile || isTablet;
    let isLogged = true;
    if (currentPage === 'main') isLogged = false;
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

    const handleToggleMenu = () => setIsMobileMenuOpened(!isMobileMenuOpened);

    return (
        <header id="header" className={`${styles.header} ${styles[currentPage]}`}>
            <div className={`${styles.header__inner} container`}>
                <Link to="/" className='centered'>
                    <Logo className={styles.logo} />
                </Link>
                {
                    !showOnGadgets && isLogged && <HeaderNavigation handleToggleMenu={handleToggleMenu}/>
                }
                {
                    !showOnGadgets && isLogged &&
                        <nav className={styles.authorization}>
                            <Link to="/profile" className={styles.profileButton}>
                                Аккаунт
                                <span className={`${styles['profileButton__icon']} centered`}>
                                    <ProfileIcon />
                                </span>
                            </Link>
                        </nav>
                }
                {
                    !isLogged ?
                        <nav className={styles.authorization}>
                            <Link to="/signup">Регистрация</Link>
                            <Link
                                to="/signin"
                                className={`${styles.signinButton} btn btn--accent`}>
                                Войти
                            </Link>
                        </nav>
                        : showOnGadgets &&
                        <button
                            type='button'
                            className={`${styles.mobileMenu__button} centered btn`}
                            onClick={handleToggleMenu}>
                            {isMobileMenuOpened ? <CloseIcon /> : <BurgerIcon />}
                        </button>
                }
               
            </div>
            {
                showOnGadgets &&
                    <div className={`
                            ${styles['page-overlay']}
                            ${isMobileMenuOpened ? styles.visible : ''}
                        `}>
                        <div className={`
                                ${styles.mobileMenu}
                                ${isMobileMenuOpened ? styles.opened : ''}
                            `}>
                            <HeaderNavigation
                                handleToggleMenu={handleToggleMenu}
                                showOnGadgets={showOnGadgets} />
                            <nav className={styles.authorization}>
                                <Link
                                    to="/profile"
                                    className={styles.profileButton}
                                    onClick={handleToggleMenu}>
                                    Аккаунт
                                    <span className={`${styles['profileButton__icon']} centered`}>
                                        <ProfileIcon />
                                    </span>
                                </Link>
                            </nav>
                        </div>
                    </div>
            }
        </header>
    );
};

export default Header;