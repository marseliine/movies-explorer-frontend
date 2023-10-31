import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <section className='not-found'>
            <h1 className='not-found__title'>404</h1>
            <p className='not-found__text'>Страница не найдена</p>
            <button  type='button' className='not-found__button' onClick={() => navigate(-1)}>
                Назад
            </button>
        </section >
    );
};

export default NotFound;