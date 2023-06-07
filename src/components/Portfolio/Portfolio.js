import arrow from '../../images/arrow_link.svg';

function Portfolio() {
    return (
      <section className='portfolio'>
        <h1 className='portfolio__header'>Портфолио</h1>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <a
              className='portfolio__item_link'
              href='https://github.com/liza-zhukova/how-to-learn'
              target='_blank'
              rel='noreferrer'
            >
              Статичный сайт
            </a>
            <a
              className='portfolio__item_link'
              href='https://github.com/liza-zhukova/how-to-learn'
              target='_blank'
              rel='noreferrer'
            >
              <img className='portfolio__item_arrow' src={arrow} alt='arrow' />
            </a>
          </li>
          <li className='portfolio__item'>
            <a
              className='portfolio__item_link'
              href='https://github.com/liza-zhukova/russian-travel'
              target='_blank'
              rel='noreferrer'
            >
              Адаптивный сайт
            </a>
            <a
              className='portfolio__item_link'
              href='https://github.com/liza-zhukova/russian-travel'
              target='_blank'
              rel='noreferrer'
            >
              <img className='portfolio__item_arrow' src={arrow} alt='arrow' />
            </a>
          </li>
          <li className='portfolio__item'>
            <a
              className='portfolio__item_link'
              href='https://github.com/liza-zhukova/react-mesto-auth'
              target='_blank'
              rel='noreferrer'
            >
              Одностраничное приложение
            </a>
            <a
              className='portfolio__item_link'
              href='https://github.com/liza-zhukova/react-mesto-auth'
              target='_blank'
              rel='noreferrer'
            >
              <img className='portfolio__item_arrow' src={arrow} alt='arrow' />
            </a>
          </li>
        </ul>
      </section>
    );
  }
  export default Portfolio;