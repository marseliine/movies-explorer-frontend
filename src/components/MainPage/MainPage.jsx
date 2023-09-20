import { useState, useEffect, useRef } from 'react';
import { useGadgets, useMobileDetect, useTabletDetect } from '../../hooks/useValidation';
import Preloader from '../Preloader/Preloader';
import Promo from './Promo';
import AboutProject from './AboutProject';
import AboutMe from './AboutMe';
import Techs from './Techs';
import styles from './MainPage.module.css';

const Main = () => {
    const isGadgets = useGadgets();
    const isMobile = useMobileDetect();
    const isTablet = useTabletDetect();
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 3000);
        return () => clearTimeout(timer);
      }, [isLoaded]);

    const aboutProjectSection = useRef(null);

    return (
        !isLoaded ? <Preloader /> :
        <main className={styles.main}>
            <Promo
                isGadgets={isGadgets}
                isMobile={isMobile}
                isTablet={isTablet}
                aboutProjectSection={aboutProjectSection}
            />
            <AboutProject ref={aboutProjectSection} isGadgets={isGadgets} />
            <Techs isTablet={isTablet} />
            <AboutMe isTablet={isTablet} />
        </main>
    );
};

export default Main;