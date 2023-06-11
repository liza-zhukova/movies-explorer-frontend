import MoviesCard from '../MoviesCard/MoviesCard';
import "./MoviesCardList.css"

function MoviesCardList() {
    return(
        <section className='all-movies'>
        <ul className='all-movies__list'>
            <li className='all-movies__item'>
                <MoviesCard></MoviesCard>
            </li>
            <li className='all-movies__item'>
                <MoviesCard></MoviesCard>
            </li>
            <li className='all-movies__item'>
                <MoviesCard></MoviesCard>
            </li>
            <li className='all-movies__item'>
                <MoviesCard></MoviesCard>
            </li>
            <li className='all-movies__item'>
                <MoviesCard></MoviesCard>
            </li>
            <li className='all-movies__item'>
                <MoviesCard></MoviesCard>
            </li>
            <li className='all-movies__item'>
                <MoviesCard></MoviesCard>
            </li>
            <li className='all-movies__item'>
                <MoviesCard></MoviesCard>
            </li> 
             <li className='all-movies__item'>
                <MoviesCard></MoviesCard>
            </li>
            <li className='all-movies__item'>
                <MoviesCard></MoviesCard>
            </li>
            <li className='all-movies__item'>
                <MoviesCard></MoviesCard>
            </li>
            <li className='all-movies__item'>
                <MoviesCard></MoviesCard>
            </li>
        </ul>
        </section>
    )
}
export default MoviesCardList;