function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__title">
        Портфолио
      </h2>
      <ul className="portfolio__list">
        <li className='portfolio__item'>
          <a className="portfolio__link" target="_blank" rel="noopener noreferrer"
            href="https://github.com/marseliine/how-to-learn">
            Статичный сайт
            <span className='portfolio__icon'>↗</span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className="portfolio__link" target="_blank" rel="noopener noreferrer"
            href="https://github.com/marseliine/russian-travel">
            Адаптивный сайт
            <span className='portfolio__icon'>↗</span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className="portfolio__link" target="_blank" rel="noopener noreferrer"
            href="https://github.com/marseliine/mesto">
            Одностраничное приложение
            <span className='portfolio__icon'>↗</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;