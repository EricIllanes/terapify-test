require("./db.js"); // mongoDB init
require("dotenv").config();
const cors = require("cors");
const { PORT } = process.env;
const express = require("express");
const app = express();
const morgan = require("morgan");
const routes = require("./src/routes/index.js");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} c:`);
});
