import React from "react";
import { Link } from "react-scroll";
import './Promo.css';
import web from '../../images/web_world.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__elements">
        <div className="promo__block">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <h2 className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
          <Link
            className="promo__link link"
            to='about'
            smooth={true}
            duration={500}>Узнать больше</Link>
        </div>
        <img className="promo__logo" src={web} alt='web' />
      </div>
    </section>
  );
}

export default Promo;
