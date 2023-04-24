import React, { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import MiCard from "./Card";
import { ThemeContext } from "../context/themeContext";

import '../assets/css/common/contenedor.css'


const Contenedor = ({ datos }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? " container darkMode contenedor" : "container lightMode contenedor"}>
      <Row xs={1} md={4} >
        {datos[0]
          ? datos.map((dato, i) => {
              return (
                <Col key={i}>
                  <MiCard dato={dato} />
                </Col>
              );
            })
          : null}
      </Row>
    </div>
  );
};

export default Contenedor;
