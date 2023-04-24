const router = require("express").Router();

const axios = require("axios");
const api_key = "d0ab76f7133c96b56088b8922c9aa618";

const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
const urlTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;
const urlPorVenir = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US`;

const urlCartelera = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=2&dates-maximum=2023-12-31`;

// const urlKids = `https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key=${api_key}`;

const personas = `https://api.themoviedb.org/3/person/popular?api_key=d0ab76f7133c96b56088b8922c9aa618&language=en-US&page=1`;

router.get("/popular", (req, res) => {
  axios
    .get(urlPopular)
    .then((res) => res.data)
    .then((movies) => res.json(movies))
    .catch((err) => console.log(err));
});

router.get("/topRated", (req, res) => {
  axios
    .get(urlTopRated)
    .then((res) => res.data)
    .then((movies) => res.json(movies))
    .catch((err) => console.log(err));
});

router.get("/porVenir", (req, res) => {
  axios
    .get(urlPorVenir)
    .then((res) => res.data)
    .then((movies) => res.json(movies))
    .catch((err) => res.json(err));
});

router.get("/enCartelera", (req, res) => {
  axios
    .get(urlCartelera)
    .then((res) => res.data)
    .then((movies) => res.json(movies))
    .catch((err) => console.log(err));
});

router.get("/actores", (req, res) => {
  axios
    .get(personas)
    .then((res) => res.data)
    .then((movies) => res.json(movies))
    .catch((err) => res.json(err));
});

router.get("/search", async (req, res) => {
  const { keyword } = req.body;
  await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${keyword}`
    )
    .then((res) => res.data)
    .then((movies) => res.json(movies))
    .catch((err) => res.json(err));
});

router.get("/randomMovie",  (req, res) => {
  axios
    .get(urlPopular)
    .then((res) => res.data)
    .then((movies) => res.json(movies.total_results))
    .catch((err) => console.log(err));
});

module.exports = router;
