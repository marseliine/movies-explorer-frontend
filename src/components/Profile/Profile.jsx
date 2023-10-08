import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Header from '../Header/Header';
import { user } from '../../utils/const';

const Profile = () => {

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    function handleSubmit(e) {
        // e.preventDefault();
    };

    return (
        <>
            <Header />
            <section className='profile'>
                <div className='profile__content'>
                    <h1 className='profile__title'>{`Привет, ${name}!`}</h1>
                    <form id='profile__form' className='profile__form' onSubmit={handleSubmit}>
                        <div className='profile__container'>
                            <label className='profile__data'>
                                <p className='profile__data-name'>Имя</p>
                                <input className='profile__data-input' type='text'
                                    placeholder='Введите имя' value={name} onChange={(evt) => setName(evt.target.value)} />
                            </label>
                            <label className='profile__data'>
                                <p className='profile__data-name'>E-mail</p>
                                <input className='profile__data-input' type='text' placeholder='Укажите e-mail'
                                    value={email} onChange={(evt) => setEmail(evt.target.value)} />
                            </label>
                        </div>
                        <div className='profile__btn-container'>
                            <button className='profile__btn-submit' type='submit'>
                                Редактировать
                            </button>
                            <Link className='profile__btn-exit' to='/'> Выйти из аккаунта</Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Profile;