import React from "react";
import { Route, Routes } from "react-router-dom";
import { CurrentContext } from '../../context/CurrentContext';
import Main from "../Main/Main";
import Error from "../Error/Error";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import CardsMovies from "../Movies/Movies";
import Profile from "../Profile/Profile";

function App() {
  return (
    <CurrentContext.Provider value={{}}>
      <div className="page">
        <>
          <Routes>

            <Route
              path='/'
              element={<Main />}
            />

             <Route
              path='/profile'
              element={<Profile />}
            />

            <Route
              path='/signup'
              element={<Register />}
            />

            <Route
              path='/signin'
              element={<Login />}
            />
            
             <Route
              path='error'
              element={<Error />}
            />

            <Route
              path='/movies'
              element={<CardsMovies />}
            />

            <Route
              path='/saved-movies'
              element={<SavedMovies />}
            />
          </Routes>
        </>
      </div>
    </CurrentContext.Provider>
  );
}

export default App;
