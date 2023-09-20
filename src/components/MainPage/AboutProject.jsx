import { forwardRef } from 'react';
import styles from './AboutProject.module.css';

 const AboutProject = forwardRef(({isGadgets}, ref) => {
  return (
    <section className={styles.aboutProject} ref={ref}>
      <div className={`container ${isGadgets ? 'container--sub' : ''}`}>
        <h2 className={styles.aboutProject__title}>О проекте</h2>
        <div className={styles.aboutProject__divider}></div>
        <div className={styles.aboutProject__content}>
          <div className={styles['aboutProject__content-item']}>
            <h3 className={styles['aboutProject__content-title']}>Дипломный проект включал 5 этапов</h3>
            <p className={styles['aboutProject__content-text']}>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className={styles['aboutProject__content-item']}>
            <h3 className={styles['aboutProject__content-title']}>На выполнение диплома ушло 5 недель</h3>
            <p className={styles['aboutProject__content-text']}>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className={styles.aboutProject__chart}>
          <span className='centered'>1 неделя</span>
          <span className='centered'>4 недели</span>
          <span>Back-end</span>
          <span>Front-end</span>
        </div>
      </div>
    </section>
  );
});

export default AboutProject;