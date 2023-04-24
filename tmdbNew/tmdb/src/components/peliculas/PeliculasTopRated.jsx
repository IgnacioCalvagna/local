import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import MiCard from "../../common/Card";

const PeliculasTopRated = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/peliculas/topRated").then((data) => {
      setPeliculas(data.data.results);
    });
  }, []);
  return (
    <div className="container">
      <h1>Pelis top rated</h1>

      <Row  >
        {peliculas
          ? peliculas.map((peli, i) => {
              return (
                <Col key={i}>
                  <MiCard dato={peli} />
                </Col>
              );
            })
          : null}
      </Row>
    </div>
  );
};

export default PeliculasTopRated;
