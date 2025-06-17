const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  res.send("further-shops-API läuft!");
});

app.get("/edeka_angebote.json", (req, res) => {
  fs.readFile("edeka_angebote.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("Fehler beim Lesen der Datei");
    res.setHeader("Content-Type", "application/json");
    res.send(data);
  });
});

app.get("/kaufland_angebote.json", (req, res) => {
  fs.readFile("kaufland_angebote.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("Fehler beim Lesen der Datei");
    res.setHeader("Content-Type", "application/json");
    res.send(data);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
