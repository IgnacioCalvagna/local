import React, { useEffect, useState } from "react";
import axios from "axios";
import Contenedor from "../../common/Contenedor";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

import "../../assets/css/Home/home.css";
import MiCard from "../../common/Card";
import { Card, Col, Row } from "react-bootstrap";

import useImput from "../../hooks/useImput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Search from "../../common/Search";
import Actores from "./Actores";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  const [proximosEstrenos, setProximosEstrenos] = useState([]);
  const [personas, setPersonas] = useState([]);

  

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/peliculas/porVenir")
      .then((data) => setProximosEstrenos(data.data.results));
    
  }, []);


  return (
    <header className={darkMode ? "homeDark" : "homeLight"}>
      <div className="titleHome"></div>

      <section>
        <Search />
      </section>

      <br />
      <div className="cuerpoPelis container">
        <h2 className="loQueViene">lo que se viene en el proximo tiempo </h2>
        {/* <Contenedor datos={proximosEstrenos} /> */}

        <div>
          <Row>
            {proximosEstrenos.map((peli, i) => {
              return (
                <Col key={i}>
                  <MiCard dato={peli} />
                </Col>
              );
            })}
          </Row>
        </div>
       <Actores /> 
      </div>
    </header>
  );
};

export default Home;
