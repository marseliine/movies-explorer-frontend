import React, { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../../Burger/Burger";
import NavigationLink from '../NavigationLink/NavigationLink';

const MENU_LINK_CLASS = 'navigation__logged-link';
const BUTTON_BTN_CLASS = 'navigation__button-btn';
const BUTTON_CROSS_CLASS = 'navigation__button-cross';

const NavLogged = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleBurger = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    return (
        <>
            <button className={isOpenMenu ? BUTTON_CROSS_CLASS : BUTTON_BTN_CLASS} onClick={toggleBurger} type="button"/>
            <Burger isOpenMenu={isOpenMenu} />
            <div className='navigation__logged'>
                <div className="navigation__logged-links">
                    <NavigationLink to="/movies" text="Фильмы" className={MENU_LINK_CLASS} />
                    <NavigationLink to="/saved-movies" text="Сохранённые фильмы" className={MENU_LINK_CLASS} />
                </div>
                <Link className='navigation__logged-account' to='/profile'>
                    Аккаунт
                </Link>
            </div>
        </>
    )
}

export default NavLogged;

