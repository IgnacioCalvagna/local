import axios from "axios";
import React, { useEffect, useState } from "react";
import Persona from "../Personas/Persona";

const Actores = () => {
  const [personas, setPersonas] = useState([]);

  
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/peliculas/actores")
      .then((data) => setPersonas(data.data.results));
  }, []);
  console.log(personas);

  return (
    <div>
      <h3>Actores re pegados </h3>

      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "22%",
          overflowX: "auto",
        }}
        responsive
      >
        {personas.map((p, i) => {
          return <Persona key={i} persona={p} />;
        })}
      </div>
    </div>
  );
};

export default Actores;
