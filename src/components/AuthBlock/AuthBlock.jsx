import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icons/logo.svg';
import './AuthBlock.css';

function AuthBlock() {
	return (
		<nav className="auth-block">
			<Link to="/" className="logo_place_auth-block" alt='logo'>
				<img src={logo} className='logo__image' alt='logo' />
			</Link>
			<div className='auth-block__menu'>
				<Link className='link auth-block__link' to="/sign-up">Регистрация</Link>
				<Link className='link auth-block__link login-btn' to="/sign-in">Войти</Link>
			</div>
		</nav>
	);
};

export default AuthBlock;