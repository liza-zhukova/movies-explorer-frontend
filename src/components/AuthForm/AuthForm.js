import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Validation from '../../utils/Validation';
import './AuthForm.css';

function AuthForm({
  children,
  linkText,
  buttonText,
  url,
  submitText,
  formName,
}) {
  useEffect(() => {
    const validation = new Validation();
    validation.enableValidation(formName);
    return () => {
      validation.disableValidation();
    };
  });
  return (
    <>
      <form className='form-auth' name={formName}>
        {children}
        <label className='form-auth__label'>
          <span className='form-auth__hint'>E-mail</span>
          <input name='Email' className='form-auth__input' required></input>
          <span id='Email' className='form-auth__error'></span>
        </label>
        <label className='form-auth__label'>
          <span className='form-auth__hint'>Пароль</span>
          <input
            name='password'
            className='form-auth__input'
            type='password'
            required
          ></input>
          <span id='password' className='form-auth__error'></span>
        </label>
        <button className='form-auth__submit' type="submit">{submitText}</button>
      </form>
      <div className='form-auth__text'>
        {linkText}
        <Link to={url} className='form-auth__link'>
          {buttonText}
        </Link>
      </div>
    </>
  );
}

export default AuthForm;