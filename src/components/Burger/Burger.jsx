import React from 'react';
import { Link } from 'react-router-dom';
import NavigationLink from '../Navigation/NavigationLink/NavigationLink';

const BURGER_CLASS = 'burger';
const BURGER_ACTIVE_CLASS = 'burger-active';
const BURGER_COVER_CLASS = 'burger__cover';
const BURGER_COVER_ACTIVE_CLASS = 'burger__cover-active';
const BURGER_LINK_CLASS = 'burger__link';

const Burger = ({ isOpenMenu }) => {
    return (
       
        <section className={`${BURGER_CLASS} ${isOpenMenu ? BURGER_ACTIVE_CLASS : ''}`}>
            <div className={`${BURGER_COVER_CLASS} ${isOpenMenu ? BURGER_COVER_ACTIVE_CLASS : ''}`}></div>
            <div className='burger__container'>
                <nav className='burger__links'>
                    <NavigationLink to="/" text="Главная" className={BURGER_LINK_CLASS} />
                    <NavigationLink to="/movies" text="Фильмы" className={BURGER_LINK_CLASS} />
                    <NavigationLink to="/saved-movies" text="Сохранённые фильмы" className={BURGER_LINK_CLASS} />
                </nav>
                <Link className='burger__account' to='/profile'>
                    Аккаунт
                </Link>
            </div>
        </section>
    );
};

export default Burger;
