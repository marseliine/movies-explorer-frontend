import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/icons/logo.svg';
import guard from '../../images/icons/guard.svg';
import './Navigation.css';

function Navigation() {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);

	const handleBurgerClick = () => {
		setIsBurgerOpen(!isBurgerOpen);
	};

	return (
		<nav className='navigation'>
			<div className='navigation__container'>
				<Link to="/" className="navigation__logo">
					<img src={logo} className='navigation__logo-image' alt='project logo' />
				</Link>
				<div className={`navigation__menu-block ${isBurgerOpen ? 'open' : ''}`}>
					<div className='navigation__menu'>
						<NavLink
							className={({ isActive }) =>
								`link navigation__link-home navigation__link ${isActive ? 'navigation__link-active' : ''
								}`
							}
							to="/"
						>
							Главная
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`link navigation__link ${isActive ? 'navigation__link-active' : ''
								}`
							}
							to="/movies"
						>
							Фильмы
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`link navigation__link ${isActive ? 'navigation__link-active' : ''
								}`
							}
							to="/saved-movies"
						>
							Сохраненные фильмы
						</NavLink>
					</div>
					<button type='button' className='navigation__account-btn'>
						<Link className='button-hover link navigation__link' to="/profile">Аккаунт</Link>
						<div className='navigation__account-btn_icon_container'>
							<img className='navigation__account-btn_icon' src={guard} alt='guard icon' />
						</div>
					</button>
				</div>
				<div className={`button-hover navigation__burger burger ${isBurgerOpen ? 'active' : ''}`} onClick={handleBurgerClick}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className={`navigation__overlay ${isBurgerOpen ? 'navigation__overlay_open' : ''}`} onClick={handleBurgerClick}></div>
			</div>
		</nav>
	);
};

export default Navigation;




