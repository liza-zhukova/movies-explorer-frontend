import { Link } from 'react-router-dom';
import './NavigationAuth.css';

function NavigationAuth() {
  return (
    <nav className='navigation__auth'>
          <Link to='/signup' className='navigation__auth_signup'>Регистрация</Link>
          <Link to='/signin' className='navigation__auth_signin'>Войти</Link>
    </nav>
  );
}

export default NavigationAuth;