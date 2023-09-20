import React from "react";
import { Link } from "react-router-dom";
import './AboutMe.css';
import photo from '../../images/profile_photo.jpeg';

function AboutMe() {
	return (
		<section className="about-me">
			<div className="main__header main__header_place_about-me">
				<h2 className="main__subtitle main__subtitle_place_about-me">Студент</h2>
			</div>
			<article className="about-me__info">
				<div className="about-me__text-container">
					<h3 className="about-me__title">Екатерина</h3>
					<p className="about-me__subtitle">Фронтенд-разработчик, 22 года</p>
					<p className="about-me__description">
						Я живу в городе Москва, заканчиваю магистратуру на направлении Индустриальное програмирование.Мне нравится создавать что-то полезное
						и видеть конченые результаты своей работы, поэтому я решила попробовать себя в области веб-разработки.Свою любовь к созданию чего-то
						нового и полезного я часто реализую в hand-made проектах.
					</p>
					<Link
						to='https://github.com/marseliine'
						target='_blank'
						className='link about-me__link'>
						Github
					</Link>
				</div>
				<div className="about-me__photo-container">
					<img className="about-me__photo" src={photo} alt='my profile' />
				</div>
			</article>
			<article className="portfolio">
				<h3 className="portfolio__title">Портфолио</h3>
				<ul className="portfolio__list">
					<li className="portfolio__item">
						<Link to="https://github.com/marseliine/how-to-learn" target='_blank' className="link portfolio__link">Статичный сайт</Link>
					</li>
					<li className="portfolio__item">
						<Link to="https://github.com/marseliine/russian-travel" target='_blank' className="link portfolio__link">Адаптивный сайт</Link>
					</li>
					<li className="portfolio__item">
						<Link to="https://github.com/marseliine/react-mesto-api-full-gha" target='_blank' className="link portfolio__link">Одностраничное приложение</Link>
					</li>
				</ul>
			</article>
		</section>
	)
}

export default AboutMe;