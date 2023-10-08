import Header from '../Header/Header.jsx';
import Search from '../Search/Search.jsx';
import CardList from '../Movies/MoviesCardList/MoviesCardList.jsx';
import { savedCardList } from '../../utils/const';
import Footer from '../Footer/Footer.jsx'

function SavedMovies() {
  return (
    <>
      <Header />
      <div className='movies__saved-container'>
      <section className="movies__saved">
          <Search />
          <CardList
            cardList={savedCardList} isSavedPage={true}
          />
        </section>
        <Footer />
      </div>
    </>
  )
}

export default SavedMovies;



