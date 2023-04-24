import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineHeart ,  AiFillHeart } from "react-icons/ai";

import { ThemeContext } from "../context/themeContext";

import "../assets/css/card.css";

const MiCard = ({ dato }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const poster = "https://image.tmdb.org/t/p/w300" + dato.poster_path;

const [like,setLike]= useState(false)


const handleLike=()=>{
  setLike(like?false:true)
}

  return (
    <Card
      bg={darkMode ? "secondary" : "primary"}
      key={"secondary"}
      text={"white"}
      style={{ width: "18rem" }}
      className="my-3 mx-3 card"
    >
      
      <Link to={`/peliculas/${dato.id}/detail`}>
        <Card.Img variant="top" src={poster}></Card.Img>
      </Link>



      <Card.Header style={{display:"flex",justifyContent:"space-between"}}>
        {dato.vote_average < 6 ? (
          <strong style={{ color: "#FF3F30" }}>
            {dato.vote_average} / 10 <span> 🍿</span>
          </strong>
        ) : (
          <>
            {dato.vote_average <= 7 ? (
              <strong style={{ color: "yellow" }}>
                {dato.vote_average} / 10 <span> 🍿</span>
              </strong>
            ) : (
              <strong style={{ color: "greenyellow" }}>
                {dato.vote_average} / 10 <span> 🍿</span>
              </strong>
            )}
          </>
        )}
        <button onClick={handleLike} className="fav">{like? <AiFillHeart className="like"/>: <AiOutlineHeart className="like"/>} </button>
      </Card.Header>

      <Card.Body>
        <Card.Title>{dato.original_title}</Card.Title>
        <Card.Text>
          {dato.overview.slice(0, 50)}... Fecha de lanzamiento{" "}
          {dato.release_date}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link to={`/peliculas/${dato.id}/detail`}>
          <Button variant="secondary">Go to details</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default MiCard;
