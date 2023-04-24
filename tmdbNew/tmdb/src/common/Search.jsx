import React, { useState } from "react";
import useImput from "../hooks/useImput";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";


import '../assets/css/common/search.css'

const Search = () => {

    const { darkMode } = useContext(ThemeContext);
    const [buscadas, setBuscadas] = useState([]);
    const navigate = useNavigate();

    const busqueda = useImput("");


    const handleSearch = (e) => {
    e.preventDefault();

    const object = {
      busqueda: busqueda.value,
    };

    navigate(`/result/${object.busqueda}`);
  };

  return (

    <form className="formularioBusqueda" onSubmit={handleSearch}>
      <input
        className={darkMode?"searchMovieDark ":"searchMovieLight"}
        type="text"
        placeholder="Busque una pelicula "
        {...busqueda}
      />
    </form>
  );
};

export default Search;
