import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavUnlogged from './NavigationUnlogged/NavigationUnlogged';
import NavLogged from './NavigationLogged/NavigationLogged';
import logo from './../../images/logo.svg';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className='navigation'>
      <Link to='/' tabIndex={1}>
        <img className='navigation__logo' src={logo} alt='логотип' />
      </Link>
      {location.pathname === '/' ? <NavUnlogged /> : <NavLogged />}
    </nav>
  )
}

export default Navigation;