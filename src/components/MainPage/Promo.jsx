import styles from './Promo.module.css';

const Promo = ({isMobile, isTablet, aboutProjectSection}) => {
  const handleScrollToAboutProjectSection = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: aboutProjectSection.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <section className={styles.promo}>
      <div className={`${styles.promo__inner} container ${isTablet ? 'container--sub' : isMobile ? 'container--promo' : ''}`}>
        <div className={styles.promo__content}>
          {
            isMobile ? 
            <h1 className={styles.promo__title}>
              Учебный проект <br />
              студента факультета <br />
              Веб-разработки.
            </h1>
            :
            <h1 className={styles.promo__title}>
              Учебный проект студента <br className='hideOnMobile'/>
              факультета <br className='hideOnDevices'/>
              Веб-разработки.
            </h1>
          }
          {
            isMobile ? 
              <p className={styles.promo__text}>
                Листайте ниже, чтобы узнать больше <br />
                про этот проект и его создателя.
              </p>
              :
              <p className={styles.promo__text}>
                Листайте ниже, чтобы узнать больше про этот <br className='hideOnDevices'/>
                проект и его создателя.
              </p>
          }
          <button
            type="button"
            className={`btn btn--white ${styles.promo__button}`}
            onClick={handleScrollToAboutProjectSection}>
            Узнать больше
          </button>
        </div>
        <div className={styles.promo__image}>
          <img src="/images/page/planet.svg" alt="Здесь должна быть планета" />
        </div>
      </div>
    </section>
  );
};

export default Promo;