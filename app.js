require("./db.js") // mongoDB init
const cors = require('cors');
const {PORT}= process.env
const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} c:`)
})