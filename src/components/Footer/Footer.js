import './Footer.css';

function Footer() {
    return (
      <footer className='footer'>
        <h3 className='footer__title'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className='footer__container'>
        <span className='footer__year'>&copy; {new Date().getFullYear()}</span>
        <ul className='footer__list'>
          <li className='footer__item'>
            <a
              className='footer__link'
              href='https://practicum.yandex.ru/'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>{' '}
          <li className='footer__item'>
            <a
              className='footer__link'
              href='https://github.com/topics/yandex-praktikum'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
        </div>
      </footer>
    );
  }
  export default Footer;