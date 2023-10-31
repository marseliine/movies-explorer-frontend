
import React from "react";
import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {

  return (
    <header className='header'>
      <Navigation className='nav' loggedIn={loggedIn}/>
    </header>
  );
};

export default Header;