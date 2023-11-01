import React, { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";
import NavLinkWithClass from '../NavLinkWithClass/NavLinkWithClass';

const BURGER_BTN_CLASS = 'nav__burger-btn';
const BURGER_CROSS_CLASS = 'nav__burger-cross';
const MENU_LINK_CLASS = 'nav__logged-link';

const NavLogged = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleBurgerMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    return (
        <>
            <button className={isOpenMenu ? BURGER_CROSS_CLASS : BURGER_BTN_CLASS} onClick={toggleBurgerMenu} type="button"/>
            <BurgerMenu isOpenMenu={isOpenMenu} />
            <div className='nav__logged'>
                <div className="nav__logged-links">
                    <NavLinkWithClass to="/movies" text="Фильмы" className={MENU_LINK_CLASS} />
                    <NavLinkWithClass to="/saved-movies" text="Сохранённые фильмы" className={MENU_LINK_CLASS} />
                </div>
                <Link className='nav__logged-account' to='/profile'>
                    Аккаунт
                </Link>
            </div>
        </>
    )
}

export default NavLogged;

