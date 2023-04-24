import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";

import "../../assets/css/detail.css";
const PeliculaDetail = ({ dato }) => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [companias, setCompanias] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=d0ab76f7133c96b56088b8922c9aa618`
      )
      .then(({ data }) => {
        setMovie(data);
        setGenres(data.genres);
        setCompanias(data.production_companies);
      });
  }, [id]);

  const img = "https://image.tmdb.org/t/p/w300";
  const poster = "https://image.tmdb.org/t/p/w500";

  console.log(movie);
  return (
    <section className={darkMode ? "darkMode" : " lightMode"}>
      <article className="detalle">
        <section className="detalleFotoYtitulo">
          <img
            src={`${poster}${movie.poster_path}`}
            className="poster"
            alt=""
          />
          <h2 className={darkMode ? "textDark" : "textLight"}>
            {movie.original_title}
          </h2>
          <p>{movie.tagline && movie.tagline}</p>
        </section>

        <section className="generos">
          <p className="trama">{movie.overview}</p>

          <p>Fecha de estreno: {movie.release_date}</p>
          <p>Duracion: {movie.runtime / 60}</p>
          <br />
          <div>
            <span>Generos: </span>
            {genres[0]
              ? genres.map((genre, i) => {
                  return <span key={i}>{genre.name} </span>;
                })
              : null}
          </div>
        </section>
        <p>
          {movie.homepage ? (
            <p className="peliHomePage">
              para mas informacion visite {" "}
              <a href={movie.homepage} target={"_blank"}>
                Pagina oficial de {movie.original_title}
              </a>
            </p>
          ) : (
            "pagina Web no disponible "
          )}
        </p>

        <div className="contenedorCompanias">
          {companias[0]
            ? companias.map((compania, i) => {
                return (
                  <>
                    {compania.logo_path ? (
                      <img
                        key={i}
                        src={`${img}${compania.logo_path}`}
                        className="companiaImg"
                        alt="das"
                        srcset=""
                      />
                    ) : null}
                  </>
                );
              })
            : ""}
        </div>
      </article>
    </section>
  );
};

export default PeliculaDetail;
