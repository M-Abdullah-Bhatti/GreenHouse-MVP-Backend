const express = require("express");

const app = express();

const gptRoute = require("./routes/gptRoute");
app.use("/api/gpt", gptRoute);

app.listen(4000, () => {
  console.log("server listening on port ", 4000);
});
