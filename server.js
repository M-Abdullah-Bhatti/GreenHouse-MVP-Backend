const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();


const allowedOrigins = [
  'https://green-house-mvp-frontend.vercel.app',
  'https://greenwashing-mvp-thirdparty.vercel.app',
  'https://gwi-frontend.vercel.app',
  'https://gwi-thirdparty.vercel.app',
  'https://gwi.impactscope.com',
  'https://gwi-admin.impactscope.com',
  'https://gwi-thirdparty-git-main-kostiantyn-zanins-projects.vercel.app',
  'https://gwi-thirdparty-3psk33spg-kostiantyn-zanins-projects.vercel.app',
  'http://localhost:3000', // For development purposes
];

// Configure CORS with specific origins allowed.
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const gptRoute = require("./routes/gptRoute");
const regulatorRoute = require("./routes/regulatorRoute");
const reportRoute = require("./routes/reportRoute");
const promptRoute = require("./routes/promptRoute");

const connectDb = require("./config/db");
app.use("/api/gpt", gptRoute);
app.use("/api/regulator", regulatorRoute);
app.use("/api/report", reportRoute);
app.use("/api/prompt", promptRoute);

connectDb();

app.listen(5000, () => {
  console.log("server listening on port ", 5000);
});

// Bank of America

// National Bank of Bahrain
