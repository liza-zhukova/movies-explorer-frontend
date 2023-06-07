import promo from '../../images/landing_logo.svg'
import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
    <h1 className='promo__title'>
    Учебный проект студентки факультета Веб&#8209;разработки.
    </h1>
    <img className='promo__image' src={promo} alt='web'></img>
    </section>
  );
}

export default Promo;