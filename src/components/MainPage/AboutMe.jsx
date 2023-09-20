import Portfolio from './Portfolio';
import styles from './AboutMe.module.css';

const AboutMe = ({isTablet}) => {
  return (
    <section className={styles.aboutMe}>
       <div className={`container ${isTablet ? 'container--sub' : ''}`}>
        <h2 className={styles.aboutMe__title}>Студент</h2>
        <div className={styles.aboutMe__divider}></div>
        <div className={styles.aboutMe__content}>
          <div
            className={`
              ${styles['aboutMe__content-item']}
              ${styles['aboutMe__content-item--info']}
            `}>
            <h3 className={styles['aboutMe__content-title']}>Екатерина</h3>
            <p className={styles['aboutMe__content-subtitle']}>Фронтенд-разработчик, 22 года</p>
            <p className={styles['aboutMe__content-text']}>Я живу в городе Москва, заканчиваю магистратуру на направлении Индустриальное програмирование.Мне нравится создавать что-то полезное
                и видеть конченые результаты своей работы, поэтому я решила попробовать себя в области веб-разработки.Свою любовь к созданию чего-то
                нового и полезного я часто реализую в hand-made проектах.</p>
            <a
              href="https://github.com/marseliine"
              target="_blank"
              rel="noreferrer"
              className={styles['aboutMe__content-link']}>
              Github
            </a>
          </div>
          <div
            className={`
              ${styles['aboutMe__content-item']}
              ${styles['aboutMe__content-item--image']}
            `}>
            <img
              src="./../images/page/profile_photo.jpeg"
              alt={`Просто мое селфи`} />
          </div>
        </div>

        <Portfolio />
      </div>
    </section>
  );
};

export default AboutMe;