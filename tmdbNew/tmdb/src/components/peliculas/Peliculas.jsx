import React, { useEffect, useState } from "react";
import MiCard from "../../common/Card";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import Contenedor from "../../common/Contenedor";

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/peliculas/popular").then((data) => {
      setPeliculas(data.data.results);
    });
  }, []);

  console.log(peliculas)
  return (
    <section
      className="text-center "
      style={{ margin: "0 auto", textAlign: "center" }}
    >
      <h1>Peliculas</h1>
    <Contenedor datos={peliculas }/>
    </section>
  );
};

export default Peliculas;
