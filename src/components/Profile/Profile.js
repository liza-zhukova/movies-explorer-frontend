import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Validation from "../../utils/Validation";
import './Profile.css';

function Profile(){
  useEffect(() => {
    const validation = new Validation()
    validation.enableValidation('profile')
    return () => {
      validation.disableValidation()
    };
  });
  return (
    <>
    <Header headerClass='header_movies' />
    <section className='profile'>
      <h1 className='profile__title'>Привет, Елизавета!</h1>
      <form className='profile__form' name='profile'>
        <label className='profile__label'>
          <span className='profile__name'>Имя</span>
          <input className='profile__input' placeholder='Имя' ></input>
        </label>
        <label className='profile__label'>
          <span className='profile__name'>E-mail</span>
          <input className='profile__input' placeholder='E-mail'></input>
        </label>
        <button className='profile__submit'>Редактировать</button>
      </form>
      <Link to='/' className='profile__link'>
        Выйти из аккаунта
      </Link>
    </section>
    </>
  );
};

export default Profile;