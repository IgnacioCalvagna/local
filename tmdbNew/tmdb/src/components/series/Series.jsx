import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import MiCard from "../../common/Card";

const Series = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:3001/api/series/popular"
      )
      .then((data) => {
        console.log(data.data)
        setSeries(data.data.results);
      });
  }, []);

  console.log(series);

  return (
    <div>
      <h1>Series perrito </h1>

      <Row>
        {series[0]
          ? series.map((serie, i) => {
              return (
                <Col key={i}>

                  <MiCard dato={serie} />
                
                </Col>
              )
            })
          : null}
      </Row>

    </div>
  );
};

export default Series;
