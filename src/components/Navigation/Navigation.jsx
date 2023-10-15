import React from "react";
import { Link } from "react-router-dom";
import NavUnlogged from './NavUnlogged/NavUnlogged';
import NavLogged from './NavLogged/NavLogged';
import logo from './../../images/logo.svg';

const Navigation = ({ loggedIn }) => {

  return (
    <nav className='nav'>
      <Link to='/' tabIndex={1}>
        <img className='nav__logo' src={logo} alt='логотип' />
      </Link>
      {loggedIn ? <NavLogged /> : <NavUnlogged />}

    </nav>
  )
}

export default Navigation;