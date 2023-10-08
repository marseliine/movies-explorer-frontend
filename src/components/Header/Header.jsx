import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className='header'>
      <Navigation className='nav' />
    </header>
  );
};

export default Header;