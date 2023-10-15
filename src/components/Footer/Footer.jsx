import React from 'react';

const Footer = () => {
    function getYear() {
        return new Date().getFullYear();
    }

    return (
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__container'>
                <span className='footer__date'>&copy; {getYear()}</span>
                <ul className='footer__links'>
                    <li className='footer__links-item'>
                        <a className='footer__link' target='_blank' rel='noopener noreferrer'
                            href='https://practicum.yandex.ru/'>
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li className='footer__links-item'>
                        <a className='footer__link' target='_blank' rel='noopener noreferrer'
                            href='https://github.com/marseliine'>
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;