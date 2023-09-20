import styles from './Techs.module.css';

const Techs = ({isTablet}) => {
  return (
    <section className={styles.techs}>
      <div className={`container ${isTablet ? 'container--sub' : ''}`}>
        <h2 className={styles.techs__title}>Технологии</h2>
        <div className={styles.techs__divider}></div>
        <div className={styles.techs__content}>
          <h3 className={styles['techs__content-title']}>7 технологий</h3>
          <p className={styles['techs__content-text']}>
            На курсе веб-разработки мы освоили технологии, которые применили <br className='hideOnMobile'/>
            в дипломном проекте.
          </p>
        </div>
        <ul className={styles.techs__list}>
          <li className={`${styles['techs__list-item']} centered`}>HTML</li>
          <li className={`${styles['techs__list-item']} centered`}>CSS</li>
          <li className={`${styles['techs__list-item']} centered`}>JS</li>
          <li className={`${styles['techs__list-item']} centered`}>React</li>
          <li className={`${styles['techs__list-item']} centered`}>Git</li>
          <li className={`${styles['techs__list-item']} centered`}>Express.js</li>
          <li className={`${styles['techs__list-item']} centered`}>mongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;