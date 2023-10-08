import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigation = useNavigate();
    return (
        <section className='error'>
            <h1 className='error__title'>404</h1>
            <p className='error__text'>Страница не найдена</p>
            <button className='error__button' type='button' onClick={() => navigation(-1)}>
                Назад
            </button>
        </section >
    );
};

export default Error;