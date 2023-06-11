import "./SearchForm.css"

function SearchForm({ formName }) {
  return (
    <section className='search'>
      <form className='search__form' name={formName}>
        <input className='search-form__input' placeholder='Фильм'></input>
        <button className='search-form__button'>Поиск</button>
      </form>
      <div className='checkbox'>
      <label className='checkbox__toggle'>
          <input type='checkbox' />
          <span className='checkbox__slider'></span>
        </label>
        <span className='checkbox__title'>Короткометражки</span>
      </div>
    </section>
  );
}

export default SearchForm;