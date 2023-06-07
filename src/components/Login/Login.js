import AuthForm from '../AuthForm/AuthForm';
import Header from '../Header/Header';

function Login() {
  return (
    <>
    <Header headerClass='header_auth' />
    <section className='login'>
      <h1 className='login__title'>Рады видеть!</h1>
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