import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <>
    <Header headerClassName='header_movies' />
      <main className='saved-movies'>
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;