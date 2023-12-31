const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to EXPRESS");
});

app.listen(8092, () => {
  console.log("Listening Port: 8092_Started Server");
});