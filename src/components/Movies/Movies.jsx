import Header from '../Header/Header';
import Search from '../Search/Search.jsx';
import CardList from './MoviesCardList/MoviesCardList';
import { cardList } from '../../utils/const';
import Footer from '../Footer/Footer.jsx';

function CardsMovies() {

  return (
    <>
      <Header />
      <section className="movies">
        <Search />
        <CardList cardList={cardList} />
        <div className="movies__container">
          <button className='movies__button' type="button">Еще</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CardsMovies;