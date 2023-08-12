const express = require("express");

const app = express();

app.use(express.json())

const gptRoute = require("./routes/gptRoute");
app.use("/api/gpt", gptRoute);

app.listen(5000, () => {
  console.log("server listening on port ", 5000);
});
