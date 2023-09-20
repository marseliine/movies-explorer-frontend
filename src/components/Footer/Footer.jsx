import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footer} ${styles.pindown}`}>
            <div className={`${styles.footer__inner} container`}>
                <p className={styles.footer__top}>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className={styles.footer__divider}></div>
                <div className={styles.footer__bottom}>
                    <p className={styles.copyright}>© 2023 marseliine</p>
                    <ul className={styles.footer__links}>
                        <li>
                            <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                        </li>
                        <li>
                            <a href="https://github.com/Karez79?tab=repositories" target="_blank" rel="noreferrer">Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;