const express = require("express");
const app = express();
const bodyParser = require('body-parser')
require("dotenv").config()


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


const gptRoute = require("./routes/gptRoute");
const regulatorRoute  = require("./routes/regulatorRoute");
const connectDb = require("./config/db");
app.use("/api/gpt", gptRoute);
app.use("/api/regulator", regulatorRoute);


connectDb()

app.listen(5000, () => {
  console.log("server listening on port ", 5000);
});
