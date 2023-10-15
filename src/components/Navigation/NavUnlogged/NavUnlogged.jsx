import React from "react";
import { Link } from "react-router-dom";


const NavUnlogged = () => {
  return (
    <div className='nav__unlogged'>
      <div className='nav__unlogged-links'>
        <Link className='nav__unlogged-link nav__unlogged-signup' to='/signup'>
          Регистрация
        </Link>
        <Link className='nav__unlogged-link nav__unlogged-signin' to='/signin'>
          Войти
        </Link>
      </div>
    </div>
  );
};

export default NavUnlogged;