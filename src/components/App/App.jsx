import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { api } from '../../utils/MainApi';

function App() {

  const [currentUser, setCurrentUser] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [savedMovies, setSavedMovies] = useState([]);
  const [requestError, setRequestError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    const curentPath = location.pathname;

    if (token) {
      api.getContent(token)
        .then((userData) => {
          setLoggedIn(true);
          navigate(curentPath, { replace: true });
          setCurrentUser(userData);
          localStorage.setItem('userData', JSON.stringify(userData));
          setIsLoad(true);
        })
        .catch((err) => {
          console.log(err);
          setLoggedIn(false);
          localStorage.removeItem('jwt');
          localStorage.removeItem('userData');
          setIsLoad(false);
        });
    } else {
      setLoggedIn(false);
      setIsLoad(false);
    }
  }, []);


  function handleLogin(email, password) {
    setRequestError(null);
    api.authorize({ email, password })
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          localStorage.setItem('email', email);
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        setRequestError(err);
        console.log(`ошибка ${err}`)
      });
  }

  function handleRegister(name, email, password) {
    api.register({ name, email, password }).then(() => {
      handleLogin(email, password);
      navigate("/movies", { replace: true });
    })
      .catch(err => {
        setRequestError(err);
        console.log(err);
      });
  }

  function signOut() {
    localStorage.removeItem("jwt");
    localStorage.clear();
    setLoggedIn(false);
  }

  function handleSignOut() {
    api.logout();
    setCurrentUser({
      name: '',
      email: '',
    });
    localStorage.clear();
    setLoggedIn(false);
    navigate("/", { replace: true });
  }

  function handleSaveMovie(movie) {
    api.saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (!loggedIn) return;
    Promise.all([api.getUserInfo(), api.getSavedMovies()])
      .then(([user, movies]) => {
        setCurrentUser({
          name: user.name,
          email: user.email
        });
        setSavedMovies(movies);
        localStorage.removeItem('shortMovies');
      })
      .catch((err) => {
        console.error('Ошибка при получении данных:', err);
      });
  }, [loggedIn]);

  function handleDeleteMovie(movie) {
    api.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies(savedMovies =>
          savedMovies.filter(savedMovie => savedMovie._id !== movie._id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <>
          <Routes>
            <Route
              path={'/'}
              element={<Main loggedIn={loggedIn} />}
            />
            <Route
              path={'/profile'}
              element={<ProtectedRoute
                path='/profile'
                loggedIn={loggedIn}
                element={Profile}
                isLoad={isLoad}
                setIsLoad={setIsLoad}
                onSignOut={signOut}
                handleSignOut={handleSignOut}
                setCurrentUser={setCurrentUser}
                requestError={requestError}
              />}
            />

            <Route
              path={'/movies'}
              element={<ProtectedRoute
                path='/movies'
                element={Movies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                handleSaveMovie={handleSaveMovie}
                handleDeleteMovie={handleDeleteMovie}
              />
              }
            />
            <Route
              path={'/saved-movies'}
              element={
                <ProtectedRoute
                path='/saved-movies'
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  savedMovies={savedMovies}
                  handleSaveMovie={handleSaveMovie}
                  handleDeleteMovie={handleDeleteMovie}
                />}
            />
               <Route
                path='*'
                element={<NotFound />}
              />
            <>
           

              <Route
                path='/signup'
                element={loggedIn ? (
                  <Navigate to='/movies' replace />
                ) : (
                  <Register
                    onRegister={handleRegister}
                    requestError={requestError} />
                )
                }
              />

              <Route
                path='/signin'
                element={loggedIn ? (
                  <Navigate to='/movies' replace />
                ) : (

                  <Login onLogin={handleLogin}
                    requestError={requestError}
                  />
                )
                }
              />
            </>

          </Routes>
        </>
      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;
