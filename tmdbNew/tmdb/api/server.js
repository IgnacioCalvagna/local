require("dotenv").config();

const express = require("express");
const app = express();
const morgan = require("morgan");
const port = process.env.PORT || 3001; //
const routes = require("./routes");
const cors = require("cors");
const db = require("./db/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api", routes);
app.use(
  cors({
    // Si aún no tenes deployado tu front en origin va la url local.
    // Una vez que se deploye el front acá va esa url que te entrega.
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.listen(port, () => {
  console.log(`server online on port http://localhost:${port}`);
});
