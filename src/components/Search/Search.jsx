function Search() {
    return (
        <>
            <section className="search__center">
                <div className="search">
                    <div className="search__container">
                        <input className="search__input" type="text" placeholder="Фильм" required />
                        <button className="search__btn" type="button"></button>
                    </div>
                </div>
                <form className="search__toggle-container">
                    <input className="search__checkbox" type="checkbox" id="short-film-toggle" />
                    <label className="search__toggle" htmlFor="short-film-toggle"></label>
                    <p className="search__short-film-text">Короткометражки</p>
                </form>
            </section>
        </>
    )
}

export default Search;
