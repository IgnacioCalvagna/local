import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import MiCard from "../../common/Card";
import Contenedor from "../../common/Contenedor";
import { ThemeContext } from "../../context/themeContext";

const PeliculasEnCartelera = () => {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    const [pelis, setPelis] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3001/api/peliculas/enCartelera").then((data) => {
        setPelis(data.data.results);
      });
    }, []);
  
    console.log(pelis);
  
    return (
      <div /* className={darkMode ? "darkMode" : "lightMode"} */>
        
  
       <Contenedor datos={pelis}/>
      </div>
  );
};

export default PeliculasEnCartelera;
