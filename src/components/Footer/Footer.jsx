import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES_WITH_FOOTER } from '../../utils/constants/routes-constants';
import './Footer.css';

function Footer() {
	const { pathname } = useLocation();
	const hasFooter = ROUTES_WITH_FOOTER.includes(pathname);

	return (
		hasFooter && (
			<footer className="footer">
				<p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
				<div className="footer__container">
					<p className="footer__copyright">© 2023</p>
					<nav>
						<ul className="footer__nav">
							<li>
								<Link
									to="https://practicum.yandex.ru/"
									target='_blank'
									className="link footer__nav-link">Яндекс.Практикум
								</Link>
							</li>
							<li>
								<Link
									to='https://github.com/kate-kiz'
									target='_blank'
									className="link footer__nav-link">GitHub
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		)
	)
}

export default Footer;