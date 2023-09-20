import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { polyfill } from 'seamless-scroll-polyfill';

const Layout = () => {
    /* Implement smooth scroll 🧙🏼 */
    polyfill();

    let location = useLocation();
    let currentPage = location.pathname.substring(1);
    if (currentPage === '') currentPage = 'main';
    let showHeader = currentPage !== '404' &&
        currentPage !== 'signin' &&
        currentPage !== 'signup';
    let showFooter = currentPage !== '404' &&
        currentPage !== 'signin' &&
        currentPage !== 'signup' &&
        currentPage !== 'profile';
        
    return (
        <div className="page-wrapper">
            {showHeader && <Header currentPage={currentPage} />}
            <Outlet />
            {showFooter && <Footer />}
        </div>
    );
};

export default Layout;