import React from "react";
import Header from "../Header/Header";
import AuthForm from "../AuthForm/AuthForm";
import "./Register.css"

function Register(){
    return(
        <>
        <section className='register'>
        <Header headerClass='header_auth' />
        <h1 className='auth__title'>Добро пожаловать!</h1>
        <AuthForm
        linkText='Уже зарегистрированы?'
        buttonText='Войти'
        url='/signin'
        submitText='Зарегистрироваться'
        formName='register'
      >
        <label className='form-auth__label'>
          <span className='form-auth__hibt'>Имя</span>
          <input name='name' className='form-auth__input' required></input>
          <span id='name' className='form-auth__error'></span>
        </label>
      </AuthForm>
    </section>
        </>
    );
};

export default Register;