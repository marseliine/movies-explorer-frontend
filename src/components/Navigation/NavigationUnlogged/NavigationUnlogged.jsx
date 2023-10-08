import React from "react";
import { Link } from "react-router-dom";


const NavUnlogged = () => {
  return (
    <div className='navigation__unlogged'>
      <div className='navigation__unlogged-links'>
        <Link className='navigation__unlogged-link navigation__unlogged-signup' to='/signup'>
          Регистрация
        </Link>
        <Link className='navigation__unlogged-link navigation__unlogged-signin' to='/signin'>
          Войти
        </Link>
      </div>
    </div>
  );
};

export default NavUnlogged;