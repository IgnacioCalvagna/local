import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Persona = ({ persona }) => {
  const poster = "https://image.tmdb.org/t/p/w200";

  const [knowns, setKnowns] = useState([]);

  useEffect(() => {
    setKnowns(persona.known_for);
  }, []);

  console.log(knowns);

  return (
    <div
      style={{
        padding: "5%",
      }}
    >
      <img src={`${poster}${persona.profile_path}`} width="45%" alt="" />
      <p>{persona.name}</p>
      <div>
        {knowns.map((k, i) => {
          return (
            <Link to={`/peliculas/${k.id}/detail`}>
              {" "}
              <sub key={i}>
                {k.media_type == "tv" ? k.name : k.title} <br />
              </sub>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Persona;
