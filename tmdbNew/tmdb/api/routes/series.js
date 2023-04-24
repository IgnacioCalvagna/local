const router = require("express").Router();

const axios = require("axios");
const apiKey = "d0ab76f7133c96b56088b8922c9aa618";

const urlPopular = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;
const urlTopRated = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`;


const urlOnTv = `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`;

router.get("/popular", (req, res) => {
  axios
    .get(urlOnTv)
    .then((res) => res.data)
    .then((series) => res.json(series))
    .catch((err) => console.log(err));
});





router.get("/topRated", (req, res) => {
  axios
    .get(urlTopRated)
    .then((res) => res.data)
    .then((series) => res.json(series))
    .catch((err) => console.log(err));
});

module.exports = router;
