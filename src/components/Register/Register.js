import React from "react";
import Header from "../Header/Header";
import AuthForm from "../AuthForm/AuthForm";

function Register(){
    return(
        <>
        <Header headerClass='header_auth' />
        <section className='register'>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <AuthForm
        linkText='Уже зарегистрированы?'
        buttonText='Войти'
        url='/signin'
        submitText='Зарегистрироваться'
        formName='register'
      >
        <label className='form-auth__lable'>
          <span className='form-auth__hint'>Имя</span>
          <input name='name' className='form-auth__input' required></input>
          <hr className='form-auth__line'></hr>
          <span id='name' className='form-auth__error'></span>
        </label>
      </AuthForm>
    </section>
        </>
    );
};

export default Register;