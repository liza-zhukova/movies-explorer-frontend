import AuthForm from '../AuthForm/AuthForm';
import Header from '../Header/Header';
import './Login.css';

function Login() {
  return (
    <>
    <section className='login'>
    <Header headerClass='header_auth' />
      <h1 className='auth__title'>Рады видеть!</h1>
      <AuthForm
        linkText='Ещё не зарегистрированы?'
        buttonText='Регистрация'
        url='/signup'
        submitText='Войти'
        formName='login'
      ></AuthForm>
    </section>
    </>
  );
}

export default Login;