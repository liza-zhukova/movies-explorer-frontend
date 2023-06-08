import './AboutMe.css';

function AboutMe() {
    return (
      <section className='user'>
        <h1 className='user__title'>Студентка</h1>
        <div className='user__container'>
          <div className='user__container_opinion'>
        <h2 className='user__name'>Елизавета</h2>
        <h3 className='user__about'>Фронтенд-разработчица, 24 года</h3>
        <h4 className='user__opinion'>
          Я родилась в Воронеже, но уже 6 лет живу в Санкт-Петербурге и успела закончила СПбПУ Петра Великого.
          В свободное время люблю пешие прогулки и активности на природе. Мечтаю завести собаку.
          Программированием я начала интересоваться 2 года назад. Больше всего меня зацепила веб-разработка.
          Мне сразу все понравилось и я решила заняться этим серьезно.
        </h4>
        <a className='user__source' href='https://github.com/liza-zhukova' target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className='user__avatar' alt='avatar'></img>
        </div>
      </section>
    );
  }
  
  export default AboutMe;