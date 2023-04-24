import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Contenedor from "./Contenedor";
import Search from "./Search";

const Resultado = () => {
  const { peli } = useParams();
  const api_key = "d0ab76f7133c96b56088b8922c9aa618";
  const [buscadas, setBuscadas] = useState([]);
  const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=es-ES&query=${peli}`;

  useEffect(() => {
    axios.get(endpoint).then((pelis) => setBuscadas(pelis.data.results));
  }, [endpoint]);



  return (
    <>
      <h2> resultado</h2>
      <p> pelicula {peli}</p>
      
      <Search/>
     <Contenedor datos={buscadas } /> 
    </>
  );
};

export default Resultado;
