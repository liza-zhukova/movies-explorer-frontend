import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
    <main className='movies'>
        <Header headerClassName='header_movies' />
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      <button className='movies__button-more'>Ещё</button>
    </main>
    <Footer />
    </>
  );
}

export default Movies;