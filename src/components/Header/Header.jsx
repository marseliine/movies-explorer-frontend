import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AuthBlock from '../AuthBlock/AuthBlock';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import { ROUTES_WITH_HEADER, ROUTES_WITH_BLACK_HEADER } from '../../utils/constants/routes-constants';

function Header() {
  const { pathname } = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const hasHeader = ROUTES_WITH_HEADER.includes(pathname);

  return (
    hasHeader && (
      <header className={`${pathname === '/' ? 'header_color_blue' : ''} header`} >
        <Navigation />
      </header>
    )
    // hasHeader && < header className={`${pathname === '/' ? 'header_color_blue' : ''} header`} >
    //   <div className='header__container'>
    //     {isAuthenticated ? (
    //       <Navigation />
    //     ) : (
    //       <AuthBlock />
    //     )}
    //   </div>
    // </header >
  );
};

export default Header;


