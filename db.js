require("dotenv").config();
const mongoose = require("mongoose");
const { urlDB } = process.env;

mongoose
  .connect(urlDB)
  .then(console.log("database is connected c:"))
  .catch((err) => {
    console.log("el errror es:", err);
  });
