import React from 'react';
import { Link } from 'react-router-dom';
import NavLinkWithClass from '../Navigation/NavLinkWithClass/NavLinkWithClass';

const BURGER_MENU_CLASS = 'burger-menu';
const BURGER_MENU_ACTIVE_CLASS = 'burger-menu-active';
const BURGER_MENU_COVER_CLASS = 'burger-menu__cover';
const BURGER_MENU_COVER_ACTIVE_CLASS = 'burger-menu__cover-active';
const BURGER_MENU_LINK_CLASS = 'burger-menu__link';

const BurgerMenu = ({ isOpenMenu }) => {
    return (
       
        <section className={`${BURGER_MENU_CLASS} ${isOpenMenu ? BURGER_MENU_ACTIVE_CLASS : ''}`}>
            <div className={`${BURGER_MENU_COVER_CLASS} ${isOpenMenu ? BURGER_MENU_COVER_ACTIVE_CLASS : ''}`}></div>
            <div className='burger-menu__container'>
                <nav className='burger-menu__links'>
                    <NavLinkWithClass to="/" text="Главная" className={BURGER_MENU_LINK_CLASS} />
                    <NavLinkWithClass to="/movies" text="Фильмы" className={BURGER_MENU_LINK_CLASS} />
                    <NavLinkWithClass to="/saved-movies" text="Сохранённые фильмы" className={BURGER_MENU_LINK_CLASS} />
                </nav>
                <Link className='burger-menu__account' to='/profile'>
                    Аккаунт
                </Link>
            </div>
        </section>
    );
};

export default BurgerMenu;
