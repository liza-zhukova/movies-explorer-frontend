import { Routes, Route } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';

function App() {
  return (
      <div className="app">
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
