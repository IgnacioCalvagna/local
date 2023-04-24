const router = require("express").Router();
const peliculas = require("./peliculas");
const series = require("./series");

router.use("/peliculas", peliculas);
router.use("/series", series);


module.exports = router;
