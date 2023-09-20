import { useState, useEffect } from 'react';
import { useValidation } from '../../hooks/useValidation';
import Preloader from '../Preloader/Preloader';
import MoviesForm from '../MoviesForm/MoviesForm';
import SavedMoviesCardList from '../MoviesCardList/SavedMoviesCardList';
import styles from './SavedMoviesPage.module.css';

const SavedMoviesPage = () => {
    const device = useValidation();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMoviesCardListCrowded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, [isLoaded]);

    return (
        !isLoaded ? <Preloader /> :
        <main className={styles.movies}>
            <MoviesForm />
            <SavedMoviesCardList device={device} />
                <div className={`${styles['loadMoreButton-wrapper']} centered`}>
                    {   
                        isMoviesCardListCrowded && 
                            <button
                                type="button"
                                className={`${styles.loadMoreButton} btn`}>
                                Ещё
                            </button>
                    }
                </div>
        </main>
    );
};

export default SavedMoviesPage;