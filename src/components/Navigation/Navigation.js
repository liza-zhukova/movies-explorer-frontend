import { useLocation } from 'react-router-dom';
import NavigationAuth from '../NavigationAuth/NavigationAuth';
import NavigationMovie from '../NavigationMovie/NavigationMovie';

function Navigation() {
  let location = useLocation().pathname;
  if(location === '/') {
    return(<NavigationAuth />)
  }
  if(location === '/signin' || location === '/signup') {
    return
  } else {
    return(<NavigationMovie />)
  }
}
export default Navigation;