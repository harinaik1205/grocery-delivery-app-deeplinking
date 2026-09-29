const express = require("express");
const path = require("path");
const { assetLinks } = require("./assetLinks");
const app = express();

app.get("/.well-known/assetlinks.json", (req, res) => {
  res.status(200).type("application/json").send(JSON.stringify(assetLinks));
});

app.get("/", (req, res) => {
  res.send("Welcome To LocalMart");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server listening at: ", `http://localhost:${3000}`);
});
