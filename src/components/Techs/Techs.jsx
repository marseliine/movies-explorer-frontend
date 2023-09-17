import React from "react";
import './Techs.css';

function Techs() {
	return (
		<section className="techs">
			<div className="main__header main__header_place_techs">
				<h3 className="main__subtitle main__subtitle_place_techs">Технологии</h3>
			</div>
			<h2 className="techs__title">7 технологий</h2>
			<p className="techs__subtitle">
				На курсе веб-разработки мы освоили технологии,
				которые применили в дипломном проекте.
			</p>
			<ul className="techs__names">
				<li className="techs__name">HTML</li>
				<li className="techs__name">CSS</li>
				<li className="techs__name">JS</li>
				<li className="techs__name">React</li>
				<li className="techs__name">Git</li>
				<li className="techs__name">Express.js</li>
				<li className="techs__name">mongoDB</li>
			</ul>
		</section>
	)
}

export default Techs;