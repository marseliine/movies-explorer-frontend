function Hero() {
    return (
      <section className="hero">
          <h1 className="hero__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <nav className="hero__list">
            <li className="hero__item">
              <a className="hero__link" href="#project">
                О проекте
              </a>
            </li>
            <li className="hero__item">
              <a className="hero__link" href="/#technologies">
                Технологии
              </a>
            </li>
            <li className="hero__item">
              <a className="hero__link" href="/#person">
                Студент
              </a>
            </li>
          </nav>
        </section>
    )
  }
  
  export default Hero;
