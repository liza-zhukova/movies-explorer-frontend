import search from '../../images/search_icon.svg';

function SearchForm({ formName }) {
  return (
    <section className='search'>
      <form className='form' name={formName}>
        <input className='form__input' placeholder='Фильм'></input>
        <button className='form__button'>
          <img className='from__button_icon' src={search} alt='search' />
        </button>
      </form>
      <div className='checkbox'>
        <span className='checkbox__title'>Короткометражки</span>
        <label className='checkbox__toggle'>
          <input type='checkbox' />
          <span className='slider round'></span>
        </label>
      </div>
    </section>
  );
}

export default SearchForm;