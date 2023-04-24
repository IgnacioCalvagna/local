import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import Navbarr from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Peliculas from './components/peliculas/Peliculas';
import PeliculaDetail from "./components/peliculas/PeliculaDetail";
import Error404 from "./components/Error404";
import Login from "./components/Logs/Login";
import Register from "./components/Logs/Register";
import Series from "./components/series/Series";
import SeriesTopRated from "./components/series/SeriesTopRated";
import PeliculasTopRated from "./components/peliculas/PeliculasTopRated";
import PeliculasEnCartelera from "./components/peliculas/PeliculasEnCartelera";
import Resultado from "./common/Resultado";


import { ThemeContext } from "./context/themeContext";
import { useContext } from "react";


function App() {

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);


  return (
    <div className={darkMode?"AppDark":"AppLight"}>
      <Navbarr />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/peliculas" element={<Peliculas/>}/>
        <Route path="/peliculas/topRated" element={<PeliculasTopRated/>}/>
        <Route path="/peliculas/enCartelera" element={<PeliculasEnCartelera/>}/>

        <Route path="/peliculas/:id/detail" element={<PeliculaDetail/>}/>
        
        <Route path="/seriesPopulares" element={<Series/>}/>
        <Route path="/seriesTopRated" element={<SeriesTopRated/>}/>

        <Route path="/result/:peli" element={<Resultado />} />

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
