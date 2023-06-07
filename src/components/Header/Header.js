import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import headerLogo from '../../images/logo.svg';
import './Header.css';

function Header({headerClass}){
    return(
      <header className={`header ${headerClass}`}>
        <Link to='/' className='header__logo'>
        <img src={headerLogo} alt='logo' />
      </Link>
        <Navigation />
      </header>
    );
};
export default Header;