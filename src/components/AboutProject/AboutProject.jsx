import React from "react";
import './AboutProject.css';

function AboutProject() {
	return (
		<section className="about-project" id="about">
			<div className="about-project__header">
				<h2 className="about-project__subtitle">О проекте</h2>
			</div>
			<div className="about-project__info-block">
				<div className="about-project__info">
					<h3 className="about-project__info_subtitle">Дипломный проект включал 5 этапов</h3>
					<p className="about-project__info_text">
						Составление плана, работу над бэкендом, вёрстку,
						добавление функциональности и финальные доработки.
					</p>
				</div>
				<div className="about-project__info">
					<h3 className="about-project__info_subtitle">На выполнение диплома ушло 5 недель</h3>
					<p className="about-project__info_text">
						У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
						чтобы успешно защититься.
					</p>
				</div>
			</div>
			<div className="about-project__graphic">
				<div className="about-project__terms">
					<p className="about-project__term about-project__term_back backend">1 неделя</p>
					<p className="about-project__tech">Back-end</p>
				</div>
				<div className="about-project__terms">
					<p className="about-project__term frontend">4 недели</p>
					<p className="about-project__tech">Front-end</p>
				</div>
			</div>
		</section>
	)
}

export default AboutProject;