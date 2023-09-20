import React from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import './Main.css';

function Main() {
	return (
		<>
			<Promo />
			<AboutProject />
			<Techs />
			<AboutMe />
		</>
	)
}

export default Main;