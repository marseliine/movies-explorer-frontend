import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { savedMoviesData } from "../../utils/cards.js";
import './SavedMovies.css';

function SavedMovies() {
	return (
		<>
			<SearchForm />
			<MoviesCardList moviesData={savedMoviesData} />
		</>
	)
}

export default SavedMovies;