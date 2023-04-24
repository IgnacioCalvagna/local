import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import MiCard from "../../common/Card";


import '../../assets/css/Series/seriesTopRated.css'

import { ThemeContext } from "../../context/themeContext";
import Contenedor from "../../common/Contenedor";

const Series = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const [series, setSeries] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/series/topRated").then((data) => {
      setSeries(data.data.results);
    });
  }, []);

  

  return (
    <div className={darkMode ? "darkMode" : "lightMode"}>
      <h1 className={darkMode? "darkText":"lightText"}>Series perrito </h1>
      <Contenedor  datos={series}/> 
    </div>
  );
};

export default Series;
