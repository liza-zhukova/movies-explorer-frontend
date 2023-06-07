import { Link } from 'react-router-dom';

function NavigationAuth() {
  return (
    <nav className='navigation-authorization'>
          <Link to='/signup' className='navigation-authorization__signup'>Регистрация</Link>
          <Link to='/signin' className='navigation-authorization__signin'>Войти</Link>
    </nav>
  );
}

export default NavigationAuth;