import { Routes, Route, Navigate } from "react-router-dom";
import Layout from './components/Layout/Layout';
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import MainPage from "./components/MainPage/MainPage";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import SavedMoviesPage from "./components/SavedMoviesPage/SavedMoviesPage";
import './index.css';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/saved-movies" element={<SavedMoviesPage />} />
                <Route path="/signup" element={<RegisterPage />} />
                <Route path="/signin" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path='/404' element={<PageNotFound />} />
                <Route path="*" element={<Navigate to="/404" replace /> } />
            </Route>
        </Routes>
    );
};

export default App;