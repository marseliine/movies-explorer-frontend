import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import './Movies.css';
import { moviesData } from "../../utils/cards.js";

function Movies() {
	return (
		<>
			<SearchForm />
			<MoviesCardList moviesData={moviesData} />
		</>
	)
}

export default Movies;